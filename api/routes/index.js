const Router = require('koa-router');
const mainRouter = new Router();
const search = require('./search.routes.js')
mainRouter.use(search.routes());
module.exports = mainRouter;
