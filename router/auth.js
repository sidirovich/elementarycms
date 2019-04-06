const Router = require('koa-router'),
    passport = require('../controller/passport'),
    router = new Router();

router
    .get('/', async (ctx) => {
        auth(ctx);
        await ctx.render('login', {title: 'Авторизация'});
    })
    .get('/registration', async (ctx) => {
        auth(ctx);
        await ctx.render('registration', {title: 'Регистрация'});
    })
    .get('/logout', async ctx => {
        ctx.isAuthenticated();
        await ctx.logout();
        ctx.redirect('/');
    })
    .post('/registration', async (ctx) => {
        try {
            ctx.body = await User.create(ctx.request.body);
            ctx.redirect('/');
        }
        catch (err) {
            ctx.status = 400;
            await ctx.render('registration', {title: 'Регистрация', message: 'Такой пользователь зарегестрирован'})
        }
    })
    .post('/', async (ctx) => {
        await passport.authenticate('local', async(err, user) => {
            if(user === false){
                await ctx.render('login', {title: 'Авторизация', message: 'Неверный логин или пароль'});
            } else {
                ctx.login(user, async (err) => {
                    await err ? ctx.body = err : ctx.redirect('/orders');
                });
            }
        })(ctx)
    });

function auth(ctx) {
    if(ctx.isAuthenticated()){
        ctx.redirect('/user');
    }
}

module.exports = router;
