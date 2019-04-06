let mongoose = require('mongoose'),
    config = require('./config');

mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://login:passord@ds111123.mlab.com:11123/sid');

mongoose.set('debug', true);

module.exports = mongoose;
