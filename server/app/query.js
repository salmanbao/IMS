var path = require('path');
var fs = require('fs');
var util = require('util');
var hfc = require('fabric-client');
var helper = require('./helper.js');
var logger = helper.getLogger('Query');

var queryChaincode = async function (peer, channelName, chaincodeName, args, fcn, username, org_name) {
    try {
        // first setup the client for this org
        var client = await helper.getClientForOrg(org_name, username);
        logger.debug('Successfully got the fabric client for the organization "%s"', org_name);
        var channel = client.getChannel(channelName);
        if (!channel) {
            let message = util.format('Channel %s was not defined in the connection profile', channelName);
            logger.error(message);
            throw new Error(message);
        }

        // send query
        var request = {
            targets: [peer], //queryByChaincode allows for multiple targets
            chaincodeId: chaincodeName,
            fcn: fcn,
            args: [args]
        };
        logger.info(request);
        let response_payloads = await channel.queryByChaincode(request);
        if (response_payloads) {
            return response_payloads[0].toString('utf8');
        } else {
            logger.error('response_payloads is null');
            return 'response_payloads is null';
        }
    } catch (error) {
        logger.error('Failed to query due to error: ' + error.stack ? error.stack : error);
        return error.toString();
    }
};

var getBlockByHash = function (peer, hash, username, org, channelName) {
    var target = helper.buildTarget(peer, org);
    var channel = client.getChannel(channelName);

    return channel.queryBlockByHash(Buffer.from(hash), target)
        .then((response_payloads) => {
            if (response_payloads) {
                logger.debug(response_payloads);
                return response_payloads;
            } else {
                logger.error('response_payloads is null');
                return 'response_payloads is null';
            }
        }, (err) => {
            logger.error('Failed to send query due to error: ' + err.stack ? err.stack :
                err);
            return 'Failed to send query due to error: ' + err.stack ? err.stack : err;
        }).catch((err) => {
            logger.error('Failed to query with error:' + err.stack ? err.stack : err);
            return 'Failed to query with error:' + err.stack ? err.stack : err;
        });
};


exports.getBlockByHash = getBlockByHash;
exports.queryChaincode = queryChaincode;