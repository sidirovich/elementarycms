const middleware = require('./middleware');
const Koa = require('koa');
const app = new Koa();

const util = require('util');
/*
Middleware: helmet, compose, convert, logger, session, bodyparser, cors
*/
app.use(middleware.Middleware());



app.use(async (ctx, next) => {
  ctx.render = function(templatePath, locals) {
    return pug.renderFile(templatePath, locals);
  };
  await next();
});

app.use(async ctx => {
  ctx.body = 'KoaJS API wait response';
});


app.listen(3001);