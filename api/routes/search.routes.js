const Router = require('koa-router');
const searchItem = require('../controlers/searchItem.controler');
const router = new Router();
router.get('/search', searchItem);
module.exports = router;