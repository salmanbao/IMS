const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const BirthCertificateSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  info: {
    did: {
      type: String,
      required: false,
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
    city: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },

    gender: {
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
  },
  status: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    required: true
  }
});

const BirthCertificate = module.exports = mongoose.model('BirthCertificate', BirthCertificateSchema);

module.exports.getById = function (id, callback) {
  BirthCertificate.findById(id, callback);
}

module.exports.getCertBydid = function (did, callback) {
  const query = { did: did }
  BirthCertificate.findOne(query, callback);
}

module.exports.getCertByname = function (fname, callback) {
  const query = { fname: fname }
  BirthCertificate.findOne(query, callback);
}

module.exports.addCert = function (newCert, callback) {
  newCert.save(callback);
}
module.exports.getCertByUsername = function (username, callback) {
  const query = { username: username }
  BirthCertificate.findOne(query, callback);
}