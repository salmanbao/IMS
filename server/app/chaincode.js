var helper = require('./helper.js');

/**
*
* @param {string} peer peer name.
* @param {string} org organization name.
* @param {string} channelName channel name 
* @returns {Object} The response object contains message , log , installed , initiated .
*/

var getInstalledChaincodes = async function (peer, org, channelName) {
    var target = await helper.buildTarget(peer, org);
    var client = await helper.getClientForOrg(org);
    var channel = client.getChannel(channelName);
    return client.queryInstalledChaincodes(target, true)
        .then((installedCC) => {
            return installedCC;
        })
        .catch((err) => {
            return {
                message: true,
                log: err,
                installed: [],
                initiated: []
            }
        })
        .then(async (installedCC) => {
            const CC = await channel.queryInstantiatedChaincodes(target, true);
            return {
                installed: installedCC,
                initiated: CC
            };
        })
        .catch((err) => {
            return {
                message: true,
                log: err,
                installed: [],
                initiated: []
            }
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
                if (response.initiated.chaincodes.length) {
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
                return {
                    message: true,
                    log: 'null response from chaincode query',
                    installed: [],
                    initiated: []
                }
            }
        }, (err) => {
            return {
                message: true,
                log: err,
                installed: [],
                initiated: []
            }
        }).catch((err) => {
            return {
                message: true,
                log: err,
                installed: [],
                initiated: []
            }
        });
};



exports.getInstalledChaincodes = getInstalledChaincodes;