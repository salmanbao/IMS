var path = require('path');
var fs = require('fs');
var util = require('util');
var hfc = require('fabric-client');
var Peer = require('fabric-client/lib/Peer.js');
var EventHub = require('fabric-client/lib/ChannelEventHub.js');
var config = require('../config.json');
var helper = require('./helper.js');
var logger = helper.getLogger('Transaction');

var getTransactionByID = function (peer, trxnID, username, org, channelName) {
    var client = await helper.getClientForOrg(org);
    var target = helper.buildTarget(peer, org);
    var channel = client.getChannel(channelName);
    return channel.queryTransaction(trxnID, target)
        .then((response_payloads) => {
            if (response_payloads) {
                return response_payloads;
            } else {
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




exports.getTransactionByID = getTransactionByID;