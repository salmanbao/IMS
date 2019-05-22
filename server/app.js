'use strict';
var fs = require('fs');
var path = require('path');
var log4js = require('log4js');
var logger = log4js.getLogger('SampleWebApp');
var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var util = require('util');
var app = express();
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');
var bearerToken = require('express-bearer-token');
var cors = require('cors');
var Peer = require('fabric-client/lib/Peer.js');
var Client = require('fabric-client/lib/Client');

require('./config.js');
var hfc = require('fabric-client');

var helper = require('./app/helper.js');
var createChannel = require('./app/create-channel.js');
var join = require('./app/join-channel.js');
var install = require('./app/install-chaincode.js');
var instantiate = require('./app/instantiate-chaincode.js');
var invoke = require('./app/invoke-transaction.js');
var query = require('./app/query.js');
var channel = require('./app/channel.js');
var chaincode = require('./app/chaincode.js');
var host = process.env.HOST || hfc.getConfigSetting('host');
var port = process.env.PORT || hfc.getConfigSetting('port');
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////// SET CONFIGURATONS ////////////////////////////
///////////////////////////////////////////////////////////////////////////////
app.options('*', cors());
app.use(cors());
//support parsing of application/json type post data
app.use(bodyParser.json({ limit: '10mb', extended: true }));
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
// set secret variable
app.set('secret', 'thisismysecret');
app.use(expressJWT({
    secret: 'thisismysecret'
}).unless({
    path: ['/users']
}));
app.use(bearerToken());
app.use(function (req, res, next) {
    logger.debug(' ------>>>>>> new request for %s', req.originalUrl);
    if (req.originalUrl.indexOf('/users') >= 0) {
        return next();
    }

    var token = req.token;
    jwt.verify(token, app.get('secret'), function (err, decoded) {
        if (err) {
            res.send({
                success: false,
                message: 'Failed to authenticate token. Make sure to include the ' +
                    'token returned from /users call in the authorization header ' +
                    ' as a Bearer token'
            });
            return;
        } else {
            // add the decoded user name and org name to the request object
            // for the downstream code to use
            req.username = decoded.username;
            req.orgname = decoded.orgName;
            logger.debug(util.format('Decoded from JWT token: username - %s, orgname - %s', decoded.username, decoded.orgName));
            return next();
        }
    });
});

///////////////////////////////////////////////////////////////////////////////
//////////////////////////////// START SERVER /////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
var server = http.createServer(app).listen(port, function () { });
logger.info('****************** SERVER STARTED ************************');
logger.info('***************  http://%s:%s  ******************', host, port);
server.timeout = 240000;

function getErrorMessage(field) {
    var response = {
        success: false,
        message: field + ' field is missing or Invalid in the request'
    };
    return response;
}

///////////////////////////////////////////////////////////////////////////////
///////////////////////// REST ENDPOINTS START HERE ///////////////////////////
///////////////////////////////////////////////////////////////////////////////
// Register and enroll user
app.post('/users', async function (req, res) {
    var username = req.body.username;
    var orgName = req.body.orgName;
    logger.debug('End point : /users');
    logger.debug('User name : ' + username);
    logger.debug('Org name  : ' + orgName);
    if (!username) {
        res.json(getErrorMessage('\'username\''));
        return;
    }
    if (!orgName) {
        res.json(getErrorMessage('\'orgName\''));
        return;
    }
    var token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + parseInt(hfc.getConfigSetting('jwt_expiretime')),
        username: username,
        orgName: orgName
    }, app.get('secret'));
    let response = await helper.getRegisteredUser(username, orgName, true);
    logger.debug('-- returned from registering the username %s for organization %s', username, orgName);
    if (response && typeof response !== 'string') {
        logger.debug('Successfully registered the username %s for organization %s', username, orgName);
        response.token = token;
        res.status(200).json(response);
        //res.json({ success: true, message: response });
        //res.json(response);
    } else {
        logger.debug('Failed to register the username %s for organization %s with::%s', username, orgName, response);
        res.json({ success: false, message: response });
    }

});
// Create Channel
app.post('/channels', async function (req, res) {
    logger.info('<<<<<<<<<<<<<<<<< C R E A T E  C H A N N E L >>>>>>>>>>>>>>>>>');
    logger.debug('End point : /channels');
    var channelName = req.body.channelName;
    //var channelConfigPath = req.body.channelConfigPath;
    var channelFile = req.body.channelFile;
    var channelConfigPath = '../artifacts/channel/'.concat(channelFile);
    logger.debug('Channel name : ' + channelName);
    logger.debug('channelConfigPath : ' + channelConfigPath); //../artifacts/channel/mychannel.tx
    if (!channelName) {
        res.json(getErrorMessage('\'channelName\''));
        return;
    }
    if (!channelConfigPath) {
        res.json(getErrorMessage('\'channelConfigPath\''));
        return;
    }

    let message = await createChannel.createChannel(channelName, channelConfigPath, req.username, req.orgname);
    res.send(message);
});
// Join Channel
app.post('/channels/:channelName/peers', async function (req, res) {
    logger.info('<<<<<<<<<<<<<<<<< J O I N  C H A N N E L >>>>>>>>>>>>>>>>>');
    var channelName = req.params.channelName;
    var peers = req.body.peers;
    logger.debug('channelName : ' + channelName);
    logger.debug('peers : ' + peers);
    logger.debug('username :' + req.username);
    logger.debug('orgname:' + req.orgname);

    if (!channelName) {
        res.json(getErrorMessage('\'channelName\''));
        return;
    }
    if (!peers || peers.length == 0) {
        res.json(getErrorMessage('\'peers\''));
        return;
    }

    let message = await join.joinChannel(channelName, peers, req.username, req.orgname);
    res.send(message);
});
// Install chaincode on target peers
app.post('/chaincodes', async function (req, res) {
    logger.debug('==================== INSTALL CHAINCODE ==================');
    var peers = req.body.peers;
    var chaincodeName = req.body.chaincodeName;
    var chaincodePath = req.body.chaincodePath;
    var chaincodeVersion = req.body.chaincodeVersion;
    var chaincodeType = req.body.chaincodeType;
    
    logger.debug('peers : ' + peers); // target peers list
    logger.debug('chaincodeName : ' + chaincodeName);
    logger.debug('chaincodePath  : ' + chaincodePath);
    logger.debug('chaincodeVersion  : ' + chaincodeVersion);
    logger.debug('chaincodeType  : ' + chaincodeType);
    
    if (!peers || peers.length == 0) {
        res.json(getErrorMessage('\'peers\''));
        return;
    }
    if (!chaincodeName) {
        res.json(getErrorMessage('\'chaincodeName\''));
        return;
    }
    if (!chaincodePath) {
        res.json(getErrorMessage('\'chaincodePath\''));
        return;
    }
    if (!chaincodeVersion) {
        res.json(getErrorMessage('\'chaincodeVersion\''));
        return;
    }
    if (!chaincodeType) {
        res.json(getErrorMessage('\'chaincodeType\''));
        return;
    }
    let message = await install.installChaincode(peers, chaincodeName, chaincodePath, chaincodeVersion, chaincodeType, req.username, req.orgname)
    res.send(message);
});
// Instantiate chaincode on target peers
app.post('/channels/:channelName/chaincodes', async function (req, res) {
    logger.debug('==================== INSTANTIATE CHAINCODE ==================');
    var peers = req.body.peers;
    var chaincodeName = req.body.chaincodeName;
    var chaincodeVersion = req.body.chaincodeVersion;
    var channelName = req.params.channelName;
    var chaincodeType = req.body.chaincodeType;
    var fcn = req.body.fcn;
    var args = req.body.args;
    logger.debug('peers  : ' + peers);
    logger.debug('channelName  : ' + channelName);
    logger.debug('chaincodeName : ' + chaincodeName);
    logger.debug('chaincodeVersion  : ' + chaincodeVersion);
    logger.debug('chaincodeType  : ' + chaincodeType);
    logger.debug('fcn  : ' + fcn);
    logger.debug('args  : ' + args);
    if (!chaincodeName) {
        res.json(getErrorMessage('\'chaincodeName\''));
        return;
    }
    if (!chaincodeVersion) {
        res.json(getErrorMessage('\'chaincodeVersion\''));
        return;
    }
    if (!channelName) {
        res.json(getErrorMessage('\'channelName\''));
        return;
    }
    if (!chaincodeType) {
        res.json(getErrorMessage('\'chaincodeType\''));
        return;
    }
    if (!args) {
        res.json(getErrorMessage('\'args\''));
        return;
    }

    let message = await instantiate.instantiateChaincode(peers, channelName, chaincodeName, chaincodeVersion, chaincodeType, fcn, args, req.username, req.orgname);
    res.send(message);
});
// Invoke transaction on chaincode on target peers
app.post('/channels/:channelName/chaincodes/:chaincodeName', async function (req, res) {
    logger.debug('==================== INVOKE ON CHAINCODE ==================');
    console.log("Body-------->", req.body);
    var peers = req.body.peers;
    var chaincodeName = req.params.chaincodeName;
    var channelName = req.params.channelName;
    var fcn = req.body.fcn;
    var args = req.body.args;
    logger.debug('channelName  : ' + channelName);
    logger.debug('chaincodeName : ' + chaincodeName);
    logger.debug('fcn  : ' + fcn);
    logger.debug('args  : ' + args);
    if (!peers || peers.length == 0) {
        res.json(getErrorMessage('\'peers\''));
        return;
    }
    if (!chaincodeName) {
        res.json(getErrorMessage('\'chaincodeName\''));
        return;
    }
    if (!channelName) {
        res.json(getErrorMessage('\'channelName\''));
        return;
    }
    if (!fcn) {
        res.json(getErrorMessage('\'fcn\''));
        return;
    }
    if (!args) {
        res.json(getErrorMessage('\'args\''));
        return;
    }
    console.log("function name is :", fcn);
    invoke.invokeChaincode(peers, channelName, chaincodeName, args, fcn, req.username, req.orgname)
        .then(function (message) {
            res.send(message);
        });
});
// Query on chaincode on target peers
app.get('/channels/:channelName/chaincodes/:chaincodeName', async function (req, res) {
    logger.debug('==================== QUERY BY CHAINCODE ==================');
    var channelName = req.params.channelName;
    var chaincodeName = req.params.chaincodeName;
    let args = req.body.args;
    let fcn = req.body.fcn;
    let peer = req.body.peer;

    logger.debug('channelName : ' + channelName);
    logger.debug('chaincodeName : ' + chaincodeName);
    logger.debug('fcn : ' + fcn);
    logger.debug('args : ' + args);

    if (!chaincodeName) {
        res.json(getErrorMessage('\'chaincodeName\''));
        return;
    }
    if (!channelName) {
        res.json(getErrorMessage('\'channelName\''));
        return;
    }
    if (!fcn) {
        res.json(getErrorMessage('\'fcn\''));
        return;
    }
    if (!args) {
        res.json(getErrorMessage('\'args\''));
        return;
    }
    // let message = await query.queryChaincode(peer, channelName, chaincodeName, args, fcn, req.username, req.orgname, res);
    let message = await query.queryChaincode(peer, channelName, chaincodeName, args.toString(), fcn, req.username, req.orgname, res);
    // res.send('Successfully queried ')
    res.send(message);
});
//  Query Get Block by BlockNumber
app.get('/channels/:channelName/blocks/:blockId', async function (req, res) {
    logger.debug('==================== GET BLOCK BY NUMBER ==================');
    let blockId = req.params.blockId;
    let peerName = req.body.peer;
    let channelName = req.params.channelName;
    logger.debug('channelName : ' + channelName);
    logger.debug('BlockID : ' + blockId);
    logger.debug('Peer : ' + peer);
    if (!blockId) {
        res.json(getErrorMessage('\'blockId\''));
        return;
    }
    try {
        var client = await helper.getClientForOrg(req.orgname);
        var channel = client.getChannel(channelName);
        var peer = helper.buildTarget(peerName, req.orgname);

        return channel.queryBlock(parseInt(blockId), peer, true, false).then((response_payloads) => {
            if (response_payloads) {
                //TODO: determine # of trxns per block
                //logger.debug('\n\nTransactions Count : '+response_payloads.data.data.length+'\n\n');
                res.send(response_payloads); //response_payloads.data.data[0].buffer;
            } else {
                logger.error('response_payloads is null');
                return 'response_payloads is null';
            }
        })
            .catch((err) => {
                res.send(new Error("Unable to fetch channel details"));
            });

    } catch (error) {
        logger.error('Failed to get all config: %s with error: %s', error.toString());
        res.send({ error: 'failed ' + error.toString() });
    }
});
//  Query Get Channel Files .tx
app.get('/channelfiles', function (req, res) {
    logger.debug('==================== GET Channel .tx Files ==================');
    const directoryPath = path.join(__dirname, '/artifacts/channel');
    var filesList = [];
    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach
        files.filter(function (e) {
            if (path.extname(e).toLowerCase() === '.tx') {
                var filename = path.basename(e);
                filesList.push(filename);
            }
        });
        res.send(filesList);
    });
});
// Query Get Chaincode Files
app.get('/chaincodefiles', function (req, res) {
    logger.debug('==================== GET Chaincode Files ==================');
    const directoryPath = path.join(__dirname, '/artifacts/src/github.com/');
    var filesList = [];
    var names = [];
    var chaincodeObj = {};
    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        for (var i in files) {
            var name = directoryPath + files[i];
            if (fs.statSync(name).isDirectory()) {
                filesList.push(name);
            }
        }
        filesList.forEach(function (element) {
            let list = element.split('/');
            let name = list[list.length - 1];
            names.push(name);
            chaincodeObj[name] = element;
        });
        console.log(chaincodeObj);
        res.send(chaincodeObj);
    });

});
// Query Get Peers by Channel Name
app.get('/peers/:channel', async function (req, res) {
    logger.debug('==================== Testing ==================');
    try {
        var PEERS = [];
        var client = await helper.getClientForOrg(req.orgname);
        logger.debug('Successfully initialized the credential stores');
        var peers = client.getPeersForOrgOnChannel([req.params.channel]);
        peers.forEach(function (peer) {
            PEERS.push({
                name: peer._peer._name,
                route: peer._peer._url,
                mspId: peer._mspid,
                type: "Peer(member)"
            });
        });
        res.send(PEERS);
    } catch (error) {
        logger.error('Failed to get peers: %s with error: %s', error.toString());
        res.send({ error: 'failed ' + error.toString() });
    }
});
// Query Get Peers Details by Channel Name
app.get('/peersdetail/:channel', async function (req, res) {
    logger.debug('==================== Testing ==================');
    try {
        var PEERS = [];
        var client = await helper.getClientForOrg(req.orgname);
        logger.debug('Successfully initialized the credential stores');
        var peers = client.getPeersForOrgOnChannel([req.params.channel]);
        peers.forEach(function (peer) {
            PEERS.push({
                name: peer._peer._name,
                route: peer._peer._url,
                mspId: peer._mspid,
                request_timeout: peer._peer.request_timeout,
                type: "Peer(member)",
                role: peer._roles
            });
        });
        res.send(PEERS);
    } catch (error) {
        logger.error('Failed to get peers: %s with error: %s', error.toString());
        res.send({ error: 'failed ' + error.toString() });
    }
});
// Query Get Current CA Service
app.get('/caservice', async function (req, res) {
    logger.debug('==================== Testing ==================');
    try {
        var client = await helper.getClientForOrg(req.orgname);
        logger.debug('Successfully initialized the credential stores');
        var ca = client.getCertificateAuthority();
        res.send({
            name: ca._name,
            url: ca._url,
            cert: ca._tlsCACerts
        });
    } catch (error) {
        logger.error('Failed to get caService: %s with error: %s', error.toString());
        res.send({ error: 'failed ' + error.toString() });
    }
});
// Query Get All Configuration
app.get('/allconfig', async function (req, res) {
    logger.debug('==================== Testing ==================');
    try {
        var client = await helper.getClientForOrg(req.orgname);
        logger.debug('Successfully initialized the credential stores');
        var allConfig = client.getConfigSetting();
        res.send(allConfig);
    } catch (error) {
        logger.error('Failed to get all config: %s with error: %s', error.toString());
        res.send({ error: 'failed ' + error.toString() });
    }
});
// Query Get Peers Details by Org Name
app.get('/peersdetail/:org', async function (req, res) {
    logger.debug('==================== Testing ==================');
    try {
        var client = await helper.getClientForOrg(req.params.org);
        var peers = client.getPeersForOrg(client.getMspid());
        res.send(peers);
    } catch (error) {
        logger.error('Failed to get all config: %s with error: %s', error.toString());
        res.send({ error: 'failed ' + error.toString() });
    }
});
// Query Get Orderer by Channel Name
app.get('/orderer/:channel', async function (req, res) {
    logger.debug('==================== Testing ==================');
    try {
        var client = await helper.getClientForOrg(req.orgname);
        var channel = client.getChannel(req.params.channel);
        var mspId = client.getMspid();
        var orderer = await channel.getOrderers();
        res.send({orderers: orderer, mspId: mspId});
    } catch (error) {
        logger.error('Failed to get Orderer by Channel Name: %s with error: %s', error.toString());
        res.send({ error: 'failed ' + error.toString() });
    }
});
// Query Get Channels on a Peer
app.get('/channels/:peer', async function (req, res) {
    logger.debug('==================== Get Channels on a Peer ==================');
    var peerName = req.params.peer;
    try {
        channel.queryChannels(req.orgname, peerName)
            .then((channels) => {
                if (channels.length > 0) {
                    res.send(channels);
                }
            });

    } catch (error) {
        logger.error('Failed to get all config: %s with error: %s', error.toString());
        res.send({ error: 'failed ' + error.toString() });
    }
});
// Query Get Transaction By ID
app.get('/channels/:channelName/transactions/:trxnId', async function (req, res) {
    logger.debug(
        '================ GET TRANSACTION BY TRANSACTION_ID ======================'
    );
    let peer = req.query.peer;
    let trxnId = req.params.trxnId;
    let channelName = req.params.channelName;
    logger.debug('channelName : ' + channelName);
    if (!trxnId) {
        res.json(getErrorMessage('\'trxnId\''));
        return;
    }
    transaction.getTransactionByID(peer, trxnId, req.username, req.orgname, channelName)
        .then(function (message) {
            res.send(message);
        });
});
// Query Get Block by Hash
app.get('/channels/:channelName/blocks', function (req, res) {
    logger.debug('================ GET BLOCK BY HASH ======================');

    let hash = req.query.hash;
    let peer = req.query.peer;
    let channelName = req.params.channelName;
    logger.debug('channelName : ' + channelName);
    if (!hash) {
        res.json(getErrorMessage('\'hash\''));
        return;
    }

    query.getBlockByHash(peer, hash, req.username, req.orgname, channelName).then(
        function (message) {
            res.send(message);
        });
});
//Query for Channel Information
app.get('/channelsinfo/:channelName', function (req, res) {
    logger.debug(
        '================ GET CHANNEL INFORMATION ======================');
    let peer = req.query.peer;
    let channelName = req.params.channelName;
    console.log("Peer :", peer);
    console.log("Channel :", channelName);
    channel.getChannelInfo(peer, req.orgname, channelName).then(
        function (message) {
            res.send(message);
        });
});
// Query to fetch all Installed/instantiated chaincodes
app.get('/chaincodes/:channel', function (req, res) {
    logger.debug(
        '================ GET INSTALLED & INITIATED CHAINCODES ======================');
    var peer = req.query.peer;
    var channelName = req.params.channel;
    chaincode.getInstalledChaincodes(peer, req.orgname, channelName)
        .then(function (message) {
            res.send(message);
        });
});
// Query to get BlockCount on a channel
app.get('/channels/:channelName/height', function (req, res) {
    logger.debug('================ GET BLOCK HEIGHT OF CHANNEL ======================');
    let peer = req.query.peer;
    let channelName = req.params.channelName;
    logger.debug('channelName : ' + channelName);

    channel.getChannelHeight(peer, req.orgname, channelName).then(
        (message) => {
            res.send(message);
        });
});

app.get('/test', async function (req, res) {
    var client = await helper.getClientForOrg(req.orgname)
    var channel = client.getChannel();
    //var peer = await helper.buildTarget('peer0.org1.example.com', req.orgname);
    var response = await channel.getChannelConfigFromOrderer();
    //console.log(response);
    res.send(response);
});