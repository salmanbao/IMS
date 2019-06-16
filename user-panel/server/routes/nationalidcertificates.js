const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const NationalIDCertificate = require('../models/nationalid');

// Register
router.post('/add', (req, res, next) => {
    console.log(req.body);
    let newCert = new NationalIDCertificate({
        title: 'National ID',
        did: req.body.did,
        username: req.body.username,
        phone: req.body.phone,
        fname: req.body.fname,
        lname: req.body.lname,
        fatherDID: req.body.fatherDID,
        motherDID: req.body.motherDID,
        familyNumber: req.body.familyNumber,
        address: req.body.address,
        gender: req.body.gender,
        martialStatus: req.body.martialStatus,
        country: req.body.country,
        province: req.body.province,
        division: req.body.division,
        district: req.body.district,
        tehsile: req.body.tehsile,
        dob: req.body.dob,
        religion: req.body.religion,
        profession: req.body.profession,
        date: req.body.date,
        status:'pending'
    });
    NationalIDCertificate.addCert(newCert, (err, cert) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to register user' });
        } else {
            res.json({ success: true, msg: 'Request Successfully Send' });
        }
    });
});

// Get all Birth Certificates
router.get('/getall', (req, res, next) => {
    NationalIDCertificate.find({}, (err, docs) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to get certificates' });
        } else {
            res.json({ success: true, msg: 'Request Successfully processed', docs: docs });
        }
    });
});

// Get Birth Certificates by id
router.get('/getbyid', (req, res, next) => {
    NationalIDCertificate.getById(req.query.id, (err, docs) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to get certificate' });
        } else {
            res.json({ success: true, msg: 'Request Successfully processed', docs: docs });
        }
    });
});

// approve blockchain request
router.post('/approve', (req, res, next) => {
    NationalIDCertificate.getCertByUsername(req.body.username, async (err, doc) => {
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
    NationalIDCertificate.getCertByUsername(req.body.username, async (err, doc) => {
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
