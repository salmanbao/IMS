const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const MarriageCertificateSchema = mongoose.Schema({
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
    father: {
      type: String,
      required: true
    },
    mother: {
      type: String,
      required: true
    },
    familyNumber: {
      type: String,
      required: true
    },
    husbandDOB: {
      type: Date,
      required: true
    },
    wifeDOB: {
      type: Date,
      required: true
    },
    MarriageDate: {
      type: Date,
      required: true
    },
    wifeAddress: {
      type: String,
      required: true
    },
    husbandAddress: {
      type: String,
      required: true
    },
    witnessOne: {
      type: String,
      required: true
    },
    witnessTwo: {
      type: String,
      required: true
    },
    witnessThird: {
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

const MarriageCertificate = module.exports = mongoose.model('MarriageCertificate', MarriageCertificateSchema);

module.exports.getById = function (id, callback) {
  MarriageCertificate.findById(id, callback);
}

module.exports.getCertBydid = function (did, callback) {
  const query = { did: did }
  MarriageCertificate.findOne(query, callback);
}

module.exports.getCertByname = function (fname, callback) {
  const query = { fname: fname }
  MarriageCertificate.findOne(query, callback);
}

module.exports.addCert = function (newCert, callback) {
  newCert.save(callback);
}
module.exports.getCertByUsername = function (username, callback) {
  const query = { username: username }
  MarriageCertificate.findOne(query, callback);
}