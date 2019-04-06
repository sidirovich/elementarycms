// in-memory store by default (use the right module instead)
const session = require('koa-generic-session');
const convert = require('koa-convert');
// sid=sadfjas;ldfkjsa;lkdjf;asjdkf

// const sessions = {sadfjas;ldfkjsa;lkdjf;asjdkf: {name: "Dmitry"}

// ctx.sessions = {name: "Dmitry"}
exports.init = app => app.use(convert(session({
  cookie: {
    signed: false
  }
})));
