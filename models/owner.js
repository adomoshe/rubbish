const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const OwnerSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: 'First name is required'
  },
  lastName: {
    type: String,
    trim: true,
    required: 'Last name is required'
  },
  password: {
    type: String,
    trim: true,
    required: 'Password is required',
    validate: [
      function(input) {
        return input.length >= 6;
      },
      'Password should be 6 or more characters long'
    ]
  },
  email: {
    type: String,
    unique: true,
    required: 'E-Mail is required',
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
  },
  userCreated: {
    type: Date,
    default: Date.now
  }
});

OwnerSchema.methods.setFullName = function() {
  this.fullName = this.firstName + ' ' + this.lastName;
  return this.fullName;
};

const Owner = mongoose.model('Owner', OwnerSchema);

module.exports = Owner;
