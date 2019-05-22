var path = require('path');
var fs = require('fs');
var util = require('util');
var hfc = require('fabric-client');
var helper = require('./helper.js');
var logger = helper.getLogger('Channel');

var queryChannels = async function (orgname, peerName) {
    var client = await helper.getClientForOrg(orgname);
    var peer = await helper.buildTarget(peerName, orgname);
    var channelNames = [];
    return client.queryChannels(peer, true).then((response) => {
        for (let i = 0; i < response.channels.length; i++) {
            channelNames.push('channel id: ' + response.channels[i].channel_id);
        }
        return channelNames;
    })
        .catch((err) => {
            return new Error("Unable to fetch channel details");
        });
};

var getChannelInfo = async function (peer, org, channelName) {
    var client = await helper.getClientForOrg(org);
    var target = await helper.buildTarget(peer, org);
    var channel = client.getChannel(channelName);
    return channel.queryInfo(target, true)
        .then((blockchainInfo) => {
            if (blockchainInfo) {
                // FIXME: Save this for testing 'getBlockByHash'  ?
                logger.debug('===========================================');
                logger.debug(blockchainInfo);
                logger.debug('===========================================');
                logger.debug('\nHeight is : ' + blockchainInfo.height.low);
                return blockchainInfo;
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

var getChannelHeight = function (peer, org, channelName) {
    return getChannelInfo(peer, org, channelName).
        then((response) => {
            if (response) {
                logger.debug('<<<<<<< channel height >>>>>>>');
                logger.debug(response.height.low);
                return response.height.low.toString();
            }
        });
};
exports.queryChannels = queryChannels;
exports.getChannelInfo = getChannelInfo;
exports.getChannelHeight = getChannelHeight;