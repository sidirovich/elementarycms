const Router = require('koa-router');

const util = require('util');

usersController = require('./controllers/user'),
elementsController = require('./controllers/elements'),

router = new Router();

//open api
router.post('/validuser', usersController.validUser);

//private api
router.post('/updateuser', usersController.updateUser);

//Получить список
router.post('/elements/', elementsController.GetList);

//Создать
router.post('/element/', elementsController.CreateElement);

//Считать
router.get('/element/:key/:id', elementsController.ReadElement);

//Изменить
router.put('/element/:key/:id', elementsController.ChangeElement);

//Удалить
router.del('/element/:key/:id', elementsController.DeleteElement);


module.exports = function routes() {
  return router.routes();
};
