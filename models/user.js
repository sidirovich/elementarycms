const mongoose = require('mongoose');

var userSchema = {
  username: String,
  usermail: String,
  password: String,
  usersite: String,
  balance: String
}

module.exports = mongoose.model('User', userSchema);
