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
        dob: req.body.date,
        religion: req.body.religion,
        profession: req.body.profession
    });
    NationalIDCertificate.addCert(newCert, (err, cert) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to register user' });
        } else {
            res.json({ success: true, msg: 'Request Successfully Send' });
        }
    });
});

module.exports = router;
