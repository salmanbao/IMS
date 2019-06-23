const express = require('express');
const router = express.Router();
const MarriageCertificate = require('../models/marriagecertificates');

// add certificate
router.post('/add', (req, res, next) => {
    console.log(req.body)
    let newCert = new MarriageCertificate({
        title: 'Marriage Certificate',
        username: req.body.username,
        info: {
            did: req.body.did,
            fname: req.body.fname,
            lname: req.body.lname,
            father: req.body.fatherDID,
            mother: req.body.motherDID,
            familyNumber: req.body.familyNumber,
            husbandDOB: req.body.husbandDOB,
            wifeDOB: req.body.wifeDOB,
            wifeAddress: req.body.wifeAddress,
            husbandAddress: req.body.husbandAddress,
            MarriageDate: req.body.MarriageDate,
            witnessOne: req.body.witnessOne,
            witnessTwo: req.body.witnessTwo,
            witnessThird: req.body.witnessThird
        },
        date: new Date().toUTCString(),
        status: 'pending'
    });
    console.log(newCert)
    MarriageCertificate.addCert(newCert, (err, cert) => {
        if (err) {
            console.log(err);
            res.json({ success: false, msg: 'Failed to register user' });
        } else {
            res.json({ success: true, msg: 'Request Successfully Send' });
        }
    });
});

// Get all Birth Certificates
router.get('/getall', (req, res, next) => {

    MarriageCertificate.find({}, (err, docs) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to get certificates' });
        } else {
            res.json({ success: true, msg: 'Request Successfully processed', docs: docs });
        }
    });
});

// Get Birth Certificates by id
router.get('/getbyid', (req, res, next) => {
    console.log(req.query.id);
    MarriageCertificate.getById(req.query.id, (err, docs) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to get certificate' });
        } else {
            res.json({ success: true, msg: 'Request Successfully processed', docs: docs });
        }
    });
});

// Get Birth Certificates by did
router.get('/getbydid', (req, res, next) => {

    MarriageCertificate.getCertBydid(req.body.did, (err, docs) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to get certificate' });
        } else {
            res.json({ success: true, msg: 'Request Successfully processed', docs: docs });
        }
    });
});


// approve blockchain request
router.post('/approve', (req, res, next) => {
    MarriageCertificate.getCertByUsername(req.body.username, async (err, doc) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to get certificate' });
        } else {
            doc.status = 'approve';
            await doc.save();
            res.json({ success: true, msg: 'Request Successfully processed', docs: doc });
        }
    });
});

// reject blockchain request
router.post('/reject', (req, res, next) => {
    MarriageCertificate.getCertByUsername(req.body.username, async (err, doc) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to get certificate' });
        } else {
            doc.status = 'reject';
            await doc.save();
            res.json({ success: true, msg: 'Request Successfully processed', docs: doc });
        }
    });

});

module.exports = router;
