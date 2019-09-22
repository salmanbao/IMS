const express = require('express');
const config = require('../../config');
const router = express.Router();
const indy = require('../../indy/index');
const auth = require('../authentication');

router.get('/', function (req, res, next) {
    res.send("Success");
});

router.post('/send_message', async function (req, res) {
    let message = JSON.parse(req.body.message);
    message.did = req.body.did;

    await indy.crypto.sendAnonCryptedMessage(req.body.did, message);
    res.send({ success: true });;
});

router.post('/send_connection_request', async function (req, res) {
    let theirEndpointDid = req.body.did;
    let connectionRequest = await indy.connections.prepareRequest(theirEndpointDid);

    await indy.crypto.sendAnonCryptedMessage(theirEndpointDid, connectionRequest);
    res.send({ success: true });;
});

router.post('/issuer/create_schema', async function (req, res) {
    await indy.issuer.createSchema(req.body.name_of_schema, req.body.version, req.body.attributes);
    res.send({ success: true });
});

router.post('/issuer/create_cred_def', async function (req, res) {
    await indy.issuer.createCredDef(req.body.schema_id, req.body.tag);
    res.send({ success: true });;
});

router.post('/issuer/send_credential_offer', async function (req, res) {
    await indy.credentials.sendOffer(req.body.their_relationship_did, req.body.cred_def_id, req.body.cred_data);
    res.send({ success: true });
});

router.post('/credentials/accept_offer', async function (req, res) {
    let message = indy.store.messages.getMessage(req.body.messageId);
    indy.store.messages.deleteMessage(req.body.messageId);
    await indy.credentials.sendRequest(message.message.origin, message.message.message);
    res.send({ success: true });;
});

router.post('/credentials/reject_offer', async function (req, res) {
    indy.store.messages.deleteMessage(req.body.messageId);
    res.send({ success: true });
}); 

router.put('/connections/request', async function (req, res) {
    let name = req.body.name;
    let messageId = req.body.messageId;
    let message = indy.store.messages.getMessage(messageId);
    indy.store.messages.deleteMessage(messageId);
    await indy.connections.acceptRequest(name, message.message.message.endpointDid, message.message.message.did, message.message.message.nonce);
    res.send({ success: true });
});

router.delete('/connections/request', async function (req, res) {
    // FIXME: Are we actually passing in the messageId yet?
    if (req.body.messageId) {
        indy.store.messages.deleteMessage(req.body.messageId);
    }
    res.send({ success: true });
});

router.post('/messages/delete', function (req, res) {
    indy.store.messages.deleteMessage(req.body.messageId);
    res.send({ success: true });
});

router.post('/proofs/accept', async function (req, res) {
    console.log(req.body);
    let result = await indy.proofs.acceptRequest(req.body.messageId);
    res.send(result);
});

router.post('/proofs/send_request', async function (req, res) {
    let myDid = await indy.pairwise.getMyDid(req.body.their_relationship_did);
    await indy.proofs.sendRequest(myDid, req.body.their_relationship_did, req.body.proof_request_id, req.body.manual_entry);
    res.send({ success: true });

});

router.post('/proofs/validate', async function (req, res) {
    console.log(req.body);
    try {
        let proof = req.body.proof;
        let isValid = await indy.proofs.validate(proof);
        if (isValid) {
            res.status(200).send({ success: true });
        } else {
            res.status(200).send({ success: true });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
});

module.exports = router;