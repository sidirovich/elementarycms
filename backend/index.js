// A "closer to real-life" app example
// using 3rd party middleware modules
// P.S. MWs calls be refactored in many files

// long stack trace (+clarify from co) if needed

if (process.env.TRACE) {
  require('./libs/trace');
}
util = require("util");

const http = require('http');
const https = require('https');

const Koa = require('koa');
const app = new Koa();

const config = require('config');
const path = require('path');
const fs = require('fs');


const handlers = fs.readdirSync(path.join(__dirname, 'handlers')).sort();
handlers.forEach(handler => {
  const h = require('./handlers/' + handler);
  h.init(app);
});

/*const Router = require('koa-router');
const router = new Router();*/
// Include Routes
const mainRoutes = require('./router/index.js');

/*var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://sidirovich:SsS6263523@ds111123.mlab.com:11123/sid');
var userSchema = new Schema({
  username: String,
  usermail: String,
  password: String,
  usersite: String
});
const User = mongoose.model("user", userSchema);*/

/*const passport = require('koa-passport');
const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(function(username, password, done) {
  User.findOne({ username: username, password: password }, done);
}))
passport.serializeUser(function(user, done) {
  done(null, user._id)
})
passport.deserializeUser(function(id, done) {
  User.findById(id, done);
})*/

// MongoDB
const mongoose = require('mongoose');
console.log('connecting to MongoDB...');
mongoose.connect('mongodb://sidirovich:SsS6263523@ds111123.mlab.com:11123/sid');
// Auth and PassportJS
require('./controller/auth.js');
const passport = require('koa-passport');
app.use(passport.initialize());
app.use(passport.session());
// Router

/*router.get('/', async function(ctx, next) {
  ctx.body = ctx.render('./templates/index.pug');
});
router.get('/registration', async function(ctx, next) {
  ctx.body = ctx.render('./templates/registration.pug');
});
router.get('/entry', async function(ctx, next) {
  ctx.body = ctx.render('./templates/entry.pug');
});

router.post('/createuser', async function(ctx, next) {
  var newUser = new User({ username: ctx.request.body.username, usermail: ctx.request.body.usermail, password: ctx.request.body.password, usersite: ctx.request.body.usersite });
  newUser.save(function (err) {
  if (err) return handleError(err);
  });
  console.log(ctx.request.body);
  ctx.redirect('/');
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/main-office',
    failureRedirect: '/entry'
  }), async function(ctx) {
    console.log(ctx.request.body);
});

router.get('/main-office', async function(ctx, next) {
  if (ctx.isAuthenticated()) {
    ctx.body = ctx.render('./templates/backoffice.pug', { usermail: ctx.state.user.usermail, usersite: ctx.state.user.usersite});
  }
  else ctx.redirect('/');
});
router.get('/payment-office', async function(ctx, next) {
  if (ctx.isAuthenticated()) {
    ctx.body = ctx.render('./templates/payment.pug', { usermail: ctx.state.user.usermail, usersite: ctx.state.user.usersite});
  }
  else ctx.redirect('/');
});
router.get('/support-office', async function(ctx, next) {
  if (ctx.isAuthenticated()) {
    ctx.body = ctx.render('./templates/support.pug', { usermail: ctx.state.user.usermail, usersite: ctx.state.user.usersite});
  }
  else ctx.redirect('/');
});
router.get('/settings-office', async function(ctx, next) {
  if (ctx.isAuthenticated()) {
    ctx.body = ctx.render('./templates/settings.pug', { usermail: ctx.state.user.usermail, usersite: ctx.state.user.usersite});
  }
  else ctx.redirect('/');
});

router.get('/logout', function(ctx) {
  ctx.logout();
  ctx.redirect('/');
});*/

//authorization?login=sidirovich-van%40yandex.ru&password=1325387

// Use routes
app.use(mainRoutes.routes());

app.listen(config.get('port'));
console.log('App listen port: ' + config.get('port'));

/*http.createServer(app.callback()).listen(config.get('port'), () => {
  console.log('http.createServer on port: ' + config.get('port'));
});*/
/*https.createServer(app.callback()).listen(3001, () => {
  console.log('http.createServer on port: ' + 3001);
});*/
