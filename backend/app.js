const middleware = require('./middleware');
const api = require('./api');
const session = require('koa-session');
const Koa = require('koa');
const app = new Koa();

const util = require('util');
/*
Middleware: helmet, compose, convert, logger, session, bodyparser, cors
*/
app.use(middleware.Middleware());

const CONFIG = {
  key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  autoCommit: true, /** (boolean) automatically commit headers (default true) */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};
app.keys = ['i like turtle'];

app.use(session(CONFIG, app));


app.use(async (ctx, next) => {
  ctx.render = function(templatePath, locals) {
    return pug.renderFile(templatePath, locals);
  };
  await next();
});

app.use(api());

app.listen(3001);