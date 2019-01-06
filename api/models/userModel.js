'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
  name: {
    type: String,
    required: 'Please enter your name'
  },
  email: {
    type: String,
    required: 'Please enter a valid email'
  },
  dob: {
    type: Date,
    required: 'Please enter a valid date'
  },
  password: {
    type: String
  },
  Created_Date: {
    type: Date,
    default: Date.now
  }
});

// NEED TO ADD AUTHENTICATION TO VERIFY EMAIL ADDRESS
// https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax

// UserSchema.path('email').validate(function (email) {
//   var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//   return emailRegex.test(email.text); // Assuming email has a text attribute
// }, 'The e-mail field cannot be empty.')

module.exports = mongoose.model('Users', UserSchema);