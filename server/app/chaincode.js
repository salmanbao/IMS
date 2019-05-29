var path = require('path');
var fs = require('fs');

var util = require('util');
var hfc = require('fabric-client');
var Peer = require('fabric-client/lib/Peer.js');
var EventHub = require('fabric-client/lib/ChannelEventHub.js');
var helper = require('./helper.js');
var logger = helper.getLogger('Chaincode');

var getInstalledChaincodes = async function (peer, org, channelName) {
    var target = await helper.buildTarget(peer, org);
    var client = await helper.getClientForOrg(org);
    var channel = client.getChannel(channelName);
    return client.queryInstalledChaincodes(target, true)
        .then((installedCC) => {
            return installedCC;
        })
        .then(async (installedCC) => {
            const CC = await channel.queryInstantiatedChaincodes(target, true);
            return {
                installed: installedCC,
                initiated: CC
            };
        })
        .then((response) => {
            if (response) {
                var installedCC = [];
                var initiatedCC = [];
                if (response.installed.chaincodes.length > 0) {
                    for (let i = 0; i < response.installed.chaincodes.length; i++) {
                        installedCC.push({
                            name: response.installed.chaincodes[i].name,
                            version: response.installed.chaincodes[i].version,
                            path: response.installed.chaincodes[i].path,
                            status: 'Installed'
                        });
                    }
                }
                if(response.initiated.chaincodes.length){
                    for (let i = 0; i < response.initiated.chaincodes.length; i++) {
                        initiatedCC.push({
                            name: response.initiated.chaincodes[i].name,
                            version: response.initiated.chaincodes[i].version,
                            path: response.initiated.chaincodes[i].path,
                            status: 'Initiated'
                        });
                    }
                }
                
                return {
                    message: true,
                    installed: installedCC,
                    initiated: initiatedCC
                }
            } else {
                logger.error('response is null');
                return 'response is null';
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



exports.getInstalledChaincodes = getInstalledChaincodes;