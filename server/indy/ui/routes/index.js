const path = require('path');
const uuid = require('uuid');
const express = require('express');
const prettyStringify = require('json-stringify-pretty-compact');
const router = express.Router();
const indy = require('../../indy/index');
const config = require('../../config');
const messageParsers = require('../messageParsers');
const auth = require('../authentication');
const messageTypes = {
    connections: indy.connections.MESSAGE_TYPES,
    credentials: indy.credentials.MESSAGE_TYPES,
    proofs: indy.proofs.MESSAGE_TYPES
};

const THEME = process.env["THEME"] || "black"

/* GET home page. */
router.get('/' ,async function (req, res) {

    let rawMessages = indy.store.messages.getAll();
    let messages = [];
    for (let message of rawMessages) {
        if (messageParsers[message.message.type]) {
            messages.push(await messageParsers[message.message.type](message));
        } else {
            messages.push(message);
        }
    }

    let proofRequests = await indy.proofs.getProofRequests(true);
    for(let prKey of Object.keys(proofRequests)) {
        proofRequests[prKey].string = prettyStringify(proofRequests[prKey]);
    }

    let credentials = await indy.credentials.getAll();
    let relationships = await indy.pairwise.getAll();
     
        let schemas = await indy.issuer.getSchemas();
        let credentialDefinitions = await indy.did.getEndpointDidAttribute('credential_definitions');
        let endpointDid =  await indy.did.getEndpointDid();
        res.send({
        messages: messages,
        messageTypes: messageTypes,
        relationships: relationships,
        credentials: credentials,
        schemas: schemas,
        credentialDefinitions: credentialDefinitions,
        endpointDid: endpointDid,
        proofRequests: proofRequests,
        name: config.userInformation.name,
        srcId: config.userInformation.icon_src,
        theme: THEME
    })
});

router.post('/login', async function(req, res) {
    if(req.body.username === config.userInformation.username &&
    req.body.password === config.userInformation.password) {
        let token = uuid();
        req.session.token = token;
        req.session.save((err) => {
            auth.validTokens.push(token);
            res.redirect('/');
        });
    } else {
        res.redirect('/login?msg=Authentication Failed. Please try again.');
    }
});

router.get('/logout', async function(req, res, next) {
    for(let i = 0; i < auth.validTokens.length; i++) {
        if(auth.validTokens[i] === req.session.token) {
            auth.validTokens.splice(i, 1);
        }
    }
    req.session.destroy(function(err) {
        if(err) {
            console.error(err);
        } else {
            auth.session = null;
            res.redirect('/login');
        }
    });
});

module.exports = router;