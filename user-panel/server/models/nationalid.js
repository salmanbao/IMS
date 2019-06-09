const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const NationalIdSchema = mongoose.Schema({
    did: {
        type: String
    },
    username: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    fatherDID: {
        type: String,
        required: true
    },
    motherDID: {
        type: String,
        required: true
    },
    familyNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    martialStatus: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    province:{
        type: String,
        required: true
    },
    division: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    tehsile: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    religion: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    }
});

const NationalIdCertificate = module.exports = mongoose.model('NationalIdCertificate', NationalIdSchema);

module.exports.getById = function (id, callback) {
    NationalIdCertificate.findById(id, callback);
}

module.exports.getCertByname = function (username, callback) {
    const query = { fname: fname }
    NationalIdCertificate.findOne(query, callback);
}

module.exports.addCert = function (newCert, callback) {
    newCert.save(callback);


}
