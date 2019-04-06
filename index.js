
if (process.env.TRACE) {
  require('./libs/trace');
}
util = require("util");

const http = require('http');
const https = require('https');

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
/*app.use(async (ctx, next) => {
  if (ctx.path === '/savetable') ctx.disableBodyParser = true;
  await next();
});*/
app.use(bodyParser());

const config = require('config');
const path = require('path');
const fs = require('fs');

const db = require('./db/db');

const handlers = fs.readdirSync(path.join(__dirname, 'handlers')).sort();
handlers.forEach(handler => {
  const h = require('./handlers/' + handler);
  h.init(app);
});

const Router = require('koa-router');
const router = new Router();


var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://login:passord@ds111123.mlab.com:11123/sid');
var userSchema = new Schema({
  username: String,
  usermail: String,
  password: String,
  usersite: String
});
const User = mongoose.model("user", userSchema);

const passport = require('koa-passport');
const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(function(username, password, done) {
  User.findOne({ username: username, password: password }, done);
}))
passport.serializeUser(function(user, done) {
  done(null, user._id)
})
passport.deserializeUser(function(id, done) {
  User.findById(id, done);
})

// Include Routes
//const mainRoutes = require('./router/index.js');
// MongoDB
//const mongoose = require('mongoose');
console.log('connecting to MongoDB...');
mongoose.connect('mongodb://login:password@ds111123.mlab.com:11123/sid');
// Auth and PassportJS
//require('./controller/auth.js');
//const passport = require('koa-passport');
app.use(passport.initialize());
app.use(passport.session());

router.get('/', async function(ctx, next) {
  fs.readFile('./db/db.json', 'utf8', function readFileCallback(err, data){
    if (err){
      console.log(err);
    }
    else {
      dbData = JSON.parse(data);
    }
  });
  ctx.body = ctx.render('./templates/index.pug', {values: dbData.ElementArray});
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

router.post('/newvalue', async function(ctx, next) {
  fs.readFile('./db/db.json', 'utf8', function readFileCallback(err, data){
    if (err){
      console.log(err);
    }
    else {
      obj = JSON.parse(data); //now it an object
      obj.ElementArray.push({ElementId: obj.ElementArray.length, parent: 0, type: ctx.request.body.type, alias: ctx.request.body.alias, title: ctx.request.body.title, content: ctx.request.body.content, }); //add some data
      json = JSON.stringify(obj); //convert it back to json
      fs.writeFile('./db/db.json', json, 'utf8'); // write it back
    }});
  console.log(ctx.request.body);
  ctx.redirect('/content');
});

router.post('/savetable', async function(ctx, next) {
  fs.readFile('./db/db.json', 'utf8', function readFileCallback(err, data){
    if (err){
      console.log(err);
    }
    else {
      dbData = JSON.parse(data);
      reqData = ctx.request.body;
      console.log(util.inspect(ctx.request.body))
      //console.log(util.inspect(ctx.request.body));
      reqData.forEach(function(element) {
        dbData.ElementArray[element.id].content = element.content;
      });
      fs.writeFile('./db/db.json', JSON.stringify(dbData), 'utf8'); // write it back
      ctx.redirect('/content');
    }
  });
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/content',
    failureRedirect: '/entry'
  }), async function(ctx) {
    console.log(ctx.request.body);
});

router.get('/content', async function(ctx, next) {
  fs.readFile('./db/db.json', 'utf8', function readFileCallback(err, data){
    if (err){
      console.log(err);
    }
    else {
      dbData = JSON.parse(data);
    }
  });
  if (ctx.isAuthenticated()) {
    ctx.body = ctx.render('./templates/content.pug', { usermail: ctx.state.user.usermail, usersite: ctx.state.user.usersite, values: dbData.ElementArray});
  }
  else ctx.redirect('/');
});
router.get('/payment-office', async function(ctx, next) {
  if (ctx.isAuthenticated()) {
    ctx.body = ctx.render('./templates/payment.pug', { usermail: ctx.state.user.usermail, usersite: ctx.state.user.usersite});
  }
  else ctx.redirect('/');
});
router.get('/support', async function(ctx, next) {
  if (ctx.isAuthenticated()) {
    ctx.body = ctx.render('./templates/support.pug', { usermail: ctx.state.user.usermail, usersite: ctx.state.user.usersite});
  }
  else ctx.redirect('/');
});
router.get('/settings', async function(ctx, next) {
  if (ctx.isAuthenticated()) {
    ctx.body = ctx.render('./templates/settings.pug', { usermail: ctx.state.user.usermail, usersite: ctx.state.user.usersite});
  }
  else ctx.redirect('/');
});

router.get('/logout', function(ctx) {
  ctx.logout();
  ctx.redirect('/');
});

// Use routes
app.use(router.routes());

app.listen(config.get('port'));
console.log('App listen port: ' + config.get('port'));

/*http.createServer(app.callback()).listen(config.get('port'), () => {
  console.log('http.createServer on port: ' + config.get('port'));
});*/
/*https.createServer(app.callback()).listen(3001, () => {
  console.log('http.createServer on port: ' + 3001);
});*/
