const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const BirthCertificate = require('../models/birthcertificates');

// Register
router.post('/add', (req, res, next) => {
    console.log(req.body);
    let newCert = new BirthCertificate({
        did: req.body.did,
        fname: req.body.fname,
        lname: req.body.lname,
        fatherDID: req.body.fatherDID,
        motherDID: req.body.motherDID,
        familyNumber: req.body.familyNumber,
        address: req.body.address,
        city: req.body.city.city,
        country: req.body.city.country,
        gender: req.body.gender,
        country: req.body.country,
        dob: req.body.dob,
        religion: req.body.religion
    });
    console.log(newCert)
    BirthCertificate.addCert(newCert, (err, cert) => {
        if (err) {
            console.log(err);
            res.json({ success: false, msg: 'Failed to register user' });
        } else {
            console.log(cert);
            res.json({ success: true, msg: 'Request Successfully Send' });
        }
    });
});

module.exports = router;
