'use strict';

const compose = require('koa-compose');
const convert = require('koa-convert');
const logger = require('koa-logger');
const helmet = require('koa-helmet'); //smaller secure middleware
const cors = require('koa-cors'); //Configures the Access-Control-Allow-Origin
const bodyParser = require('koa-bodyparser');
const session = require('koa-generic-session');

module.exports.Middleware = () => {
  return compose([
    logger(),
    helmet(), // reset HTTP headers (e.g. remove x-powered-by)
    convert(cors()),
    convert(bodyParser()),
    convert(session()),
  ]);
}