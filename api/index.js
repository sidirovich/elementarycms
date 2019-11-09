const Router = require('koa-router'),

passport = require('../controller/passport'),

router = new Router();

router.get('/', (ctx) => {
  ctx.body = ctx.render('./public/index.html');
});


module.exports = function routes() {
  return router.routes()
};
