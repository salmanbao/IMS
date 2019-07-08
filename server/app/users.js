var helper = require('./helper.js');
var X509 = require('x509');
var hfc = require('fabric-client');
var jwt = require('jsonwebtoken');
var Client = require('fabric-ca-client');
var logger = helper.getLogger('Users');

var { HFCAIdentityAttributes, HFCAIdentityType } = require('fabric-ca-client/lib/IdentityService')

var Attributes = {
    "HF REGISTRAR DELEGATE ROLES": { name: HFCAIdentityAttributes.HFREGISTRARDELEGATEROLES, value: '*' },
    "HF REGISTRAR ATTRIBUTES": { name: HFCAIdentityAttributes.HFREGISTRARATTRIBUTES, value: '*' },
    "HF AFFILIATION MGR": { name: HFCAIdentityAttributes.HFAFFILIATIONMGR, value: '1' },
    "HF REGISTRAR ROLES": { name: HFCAIdentityAttributes.HFREGISTRARROLES, value: '*' },
    "HFINTERMEDIATECA": { name: HFCAIdentityAttributes.HFINTERMEDIATECA, value: '1' },
    "HF REVOKER": { name: HFCAIdentityAttributes.HFREVOKER, value: '1' },
    "HF GEN CRL": { name: HFCAIdentityAttributes.HFGENCRL, value: '1' }
}

var Roles = {
    "CLIENT": HFCAIdentityType.CLIENT,
    "ORDERER": HFCAIdentityType.ORDERER,
    "PEER": HFCAIdentityType.PEER,
    "USER": HFCAIdentityType.USER
}

/**
*
* @param {string} username unique username.
* @param {string} orgname organization name in which user wants to enroll.
* @param {string} password password for user to authenticate with CA
* @param {string} role user role{ user,client,peer,orderer}
* @param {string} affiliation to which affiliation service user wants to join
* @param {Array<string>} attrs  list of attributes can assigned to user
* @param {boolean} isJson is a boolean for json formatting
* @returns {Object} The response instance.
*/

var register = async function (username, orgname, password, role, affiliation, attrs, isJson) {
    try {
        let roles = [];
        var client = await helper.getClientForOrg(orgname);
        let caClient = client.getCertificateAuthority();
        //Step # 1
        var admins = hfc.getConfigSetting('admins');
        let adminUserObj = await client.setUserContext({ username: admins[0].username, password: admins[0].secret });
        attrs.forEach(attribute => {
            if (Attributes.hasOwnProperty(attribute))
                roles.push(Attributes[attribute]);
        });
        let secret = await caClient.register({
            enrollmentID: username,
            enrollmentSecret: password,
            affiliation: affiliation,
            attrs: roles,
            role: Roles[role]
        }, adminUserObj);
        // Step # 3
        var enrollment = await caClient.enroll({
            enrollmentID: username,
            enrollmentSecret: secret,
            attr_reqs:roles
        });
        var user = await client.createUser(
            {
                username: username,
                mspid: client.getMspid(),
                cryptoContent: { privateKeyPEM: enrollment.key.toBytes(), signedCertPEM: enrollment.certificate },
                skipPersistence: false
            });
        user.setRoles(role);
        user.setAffiliation(affiliation);
        user._enrollmentSecret = secret;
        client.setUserContext(user);
        if (user && user.isEnrolled) {
            if (isJson && isJson === true) {
                var response = {
                    success: true,
                    secret: user._enrollmentSecret,
                    message: username + ' enrolled Successfully',
                };
                user = await client.saveUserToStateStore();
                return response;
            }
        } else {
            var response = {
                success: false,
                message: username + ' was not enrolled',
            };
            return response;
        }
    } catch (error) {
        var response = {
            success: false,
            message: helper.parseError(error)
        };
        return response;
    }
}
/**
*
* @param {string} username unique username.
* @param {string} orgname organization name in which user enrolled.
* @param {string} password password for user to authenticate with CA
* @param {boolean} isJson is a boolean for json formatting
* @returns {Object} The response instance.
*/
var login = async function (username, orgname, password, isJson) {
    var client = await helper.getClientForOrg(orgname);
    try {
        let user = await client.getUserContext(username, true);
        if (user && user.isEnrolled) {
            if (user._enrollmentSecret === password) {
                var token = jwt.sign({
                    exp: Math.floor(Date.now() / 1000) + parseInt(hfc.getConfigSetting('jwt_expiretime')),
                    username: username,
                    orgName: orgname,
                    secret: password
                }, "thisismysecret");
                if (isJson && isJson === true) {
                    var response = {
                        success: true,
                        token: token,
                        message: username + ' login Successfully',
                    };
                    return response;
                }
            } else {
                var response = {
                    success: false,
                    message: ' Incorrect credentials',
                };
                return response;
            }
        } else {
            var response = {
                success: false,
                message: username + ' does not exist',
            };
            return response;
        }
    }
    catch (error) {
        var response = {
            success: false,
            message: helper.parseError(error)
        };
        return response;
    }
}

/**
* @param {string} orgname organization name to which users you want to list.
* @returns {Object} The response instance.
*/

var getAllUsers = async function (orgname) {
    const client = await helper.getClientForOrg(orgname);
    var cert = await client.getUserContext('admin', true);
    var identityService = client.getCertificateAuthority().newIdentityService();
    var result = await identityService.getAll(cert);
    if (result.success) {
        return { success: true, result: result.result.identities };
    }
    else {
        return { success: false, result: result.messages };
    }
}

/**
* @param {string} orgname organization name to which users you want to revoke.
* @param {string} user username of admin.
* @param {string} revokeUser username to which user you want to revoke.
* @returns {Object} The object instance.
*/

var revokeUserCertificate = async function (orgname, user, revokeUser) {
    var response = {};
    try {
        var client = await helper.getClientForOrg(orgname);
        var caClient = client.getCertificateAuthority();
        var registrar = await client.getUserContext(user, true);
        var member = await client.getUserContext(revokeUser, true);
        //Get certificate
        var certificate = String(member.getIdentity()._certificate);
        //Normalize and parse/decode certificate
        var normalizeCertificate = X509.parseCert(Client.normalizeX509(certificate));
        var akiString = normalizeCertificate.extensions.authorityKeyIdentifier;
        var aki = akiString.slice(akiString.indexOf(':') + 1);
        var result = await caClient.revoke({
            enrollmentID: revokeUser,
            aki: aki,
            serial: normalizeCertificate.serial
        }, registrar);
        response.success = result.success;
        response.result = result.result;
        response.certificate = certificate;
        return response;
    } catch (error) {
        response.success = false;
        response.message = helper.parseError(error).message;
        return response;
    }
}
/**
* @param {string} orgname organization name.
* @param {string} user username.
* @returns {Object} The object instance.
*/

var CRL = async function (orgname, user) {
    var date = new Date();
    try {
        var client = await helper.getClientForOrg(orgname);
        var registrar = await client.getUserContext(user, true);
        var caClient = client.getCertificateAuthority();
        var result = await caClient.generateCRL({
            revokedBefore: date
        }, registrar);
        logger.debug(result);
        return result;
    } catch (error) {
        logger.debug(error);
        return error;
    }
}

/**
* @param {string} orgname organization name.
* @param {string} user username.
* @param {string} enrollUser user you want to re-enroll
* @returns {Object} The object instance.
* Only enrolled members can be reenrolled
* Revoked members cannot reenrolled again
*/

var reEnroll = async function (orgname, user, enrollUser) {
    var response = {};
    try {
        var client = await helper.getClientForOrg(orgname);
        var member = await client.getUserContext(enrollUser, true);
        var caClient = client.getCertificateAuthority();
        var result = await caClient.reenroll(member);
        if(result['certificate']){
            response.success = true;
            response.message = 'Successfully Enrolled';
        }
        return response;
    } catch (error) {
        response.success = false;
        response.message = helper.parseError(error).message;;
        return response;
    }
}

/**
* @param {string} orgname organization name.
* @param {string} user username.
* @param {string} removeUser user you want to remove.
* @returns {Object} The object instance.
*/

var removeUser = async function (orgname, user, removeUser) {
    try {
        var client = await helper.getClientForOrg(orgname);
        var member = await client.getUserContext(user, true);
        var caClient = client.getCertificateAuthority();
        var idService = await caClient.newIdentityService();
        var result = await idService.delete(removeUser, member);
        return result;
    } catch (error) {
        logger.debug(error.stack)
        //logger.debug(helper.parseError(error))
        return error;
    }
}
exports.register = register;
exports.login = login;
exports.getAllUsers = getAllUsers;
exports.revokeUserCertificate = revokeUserCertificate;
exports.removeUser = removeUser;
exports.reEnroll = reEnroll;
exports.CRL = CRL;

