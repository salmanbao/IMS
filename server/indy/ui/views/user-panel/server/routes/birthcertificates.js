const express = require('express');
const router = express.Router();
const BirthCertificate = require('../models/birthcertificates');

// add certificate
router.post('/add', (req, res, next) => {
    let newCert = new BirthCertificate({
        title: 'Birth Certificate',
        username: req.body.username,
        info: {
            did: req.body.did,
            fname: req.body.fname,
            lname: req.body.lname,
            fatherDID: req.body.fatherDID,
            motherDID: req.body.motherDID,
            familyNumber: req.body.familyNumber,
            address: req.body.address,
            city: req.body.city,
            country: req.body.country,
            gender: req.body.gender,
            country: req.body.country,
            dob: req.body.dob,
            religion: req.body.religion
        },
        date: req.body.date,
        status: 'pending'
    });
    console.log(newCert)
    BirthCertificate.addCert(newCert, (err, cert) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to register user' });
        } else {
            res.json({ success: true, msg: 'Request Successfully Send' });
        }
    });
});

// Get all Birth Certificates
router.get('/getall', (req, res, next) => {

    BirthCertificate.find({}, (err, docs) => {
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
    BirthCertificate.getById(req.query.id, (err, docs) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to get certificate' });
        } else {
            res.json({ success: true, msg: 'Request Successfully processed', docs: docs });
        }
    });
});

// Get Birth Certificates by did
router.get('/getbydid', (req, res, next) => {

    BirthCertificate.getCertBydid(req.body.did, (err, docs) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to get certificate' });
        } else {
            res.json({ success: true, msg: 'Request Successfully processed', docs: docs });
        }
    });
});


// approve blockchain request
router.post('/approve', (req, res, next) => {
    BirthCertificate.getCertByUsername(req.body.username, async (err, doc) => {
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
    BirthCertificate.getCertByUsername(req.body.username, async (err, doc) => {
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
