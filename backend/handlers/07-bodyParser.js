
// Parse application/json, application/x-www-form-urlencoded
// NOT form/multipart!
const bodyParser = require('koa-bodyparser');

// ctx.request.body = {name: '', surname: '', ...}
exports.init = app => app.use(bodyParser({
  jsonLimit: '56kb'
}));
