var helper = require('./helper.js');
var logger = helper.getLogger('Users');

var getAllUsers = async function (orgname) {
    const client = await helper.getClientForOrg(orgname);
    var cert = await client.getUserContext('admin', true);
    var identityService = client.getCertificateAuthority().newIdentityService();
    var result = await identityService.getAll(cert);
    if (result.success) {
        console.log(result.result.identities[0]);
        return { success: true, result: result.result.identities };
    }
    else {
        return { success: false, result: result.messages };
    }
}

var revokeUserCertificate = async function(orgname , user){
    var client = await helper.getClientForOrg(orgname);
    var member = await client.getUserContext('admin', true);
    var result = await client.getCertificateAuthority().revoke({ enrollmentID: user} , member);
    return result;
}


exports.getAllUsers = getAllUsers;
exports.revokeUserCertificate = revokeUserCertificate;