const Router = require('koa-router'),
    passport = require('../controller/passport'),
    router = new Router();

router
    .get('/', async function(ctx, next) {
      ctx.body = ctx.render('./templates/index.pug');
    })
    .get('/registration', async function(ctx, next) {
      ctx.body = ctx.render('./templates/registration.pug');
    })
    .get('/entry', async function(ctx, next) {
      ctx.body = ctx.render('./templates/entry.pug');
    })

    .post('/createuser', async function(ctx, next) {
      var newUser = new User({ username: ctx.request.body.username, usermail: ctx.request.body.usermail, password: ctx.request.body.password, usersite: ctx.request.body.usersite });
      newUser.save(function (err) {
        if (err) return handleError(err);
      });
      console.log(ctx.request.body);
      ctx.redirect('/');
    })

    .post('/login', passport.authenticate('local', {
      successRedirect: '/main-office',
      failureRedirect: '/entry'
    }), async function(ctx) {
      console.log(ctx.request.body);
    })

    //Privat Pages
    .get('/main-office', async function(ctx, next) {
      if (ctx.isAuthenticated()) {
        ctx.body = ctx.render('./templates/backoffice.pug', { usermail: ctx.state.user.usermail, usersite: ctx.state.user.usersite});
        console.log('User ' + ctx.state.user.username + ' check backoffice');
      }
      else ctx.redirect('/');
    })

    .get('/payment-office', async function(ctx, next) {
      if (ctx.isAuthenticated()) {
        ctx.body = ctx.render('./templates/payment.pug', { usermail: ctx.state.user.usermail, usersite: ctx.state.user.usersite});
      }
      else ctx.redirect('/');
    })
    .get('/support-office', async function(ctx, next) {
      if (ctx.isAuthenticated()) {
        ctx.body = ctx.render('./templates/support.pug', { usermail: ctx.state.user.usermail, usersite: ctx.state.user.usersite});
      }
      else ctx.redirect('/');
    })
    .get('/settings-office', async function(ctx, next) {
      if (ctx.isAuthenticated()) {
        ctx.body = ctx.render('./templates/settings.pug', { usermail: ctx.state.user.usermail, usersite: ctx.state.user.usersite});
      }
      else ctx.redirect('/');
    })

    .get('/logout', function(ctx) {
      ctx.logout();
      ctx.redirect('/');
    });

module.exports = router;
