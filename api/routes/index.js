const Router = require('koa-router');
const fs = require('fs');
const path = require('path');
const mainRouter = new Router();
fs.readdirSync(__dirname)
    .filter((file) => file.indexOf('.')!==0 && !file.match('index') )
    .forEach(
        (file) => {
            const router = require(path.join(__dirname, file));
            console.log(file);
            mainRouter.use(router.routes())
        },
    );

module.exports = mainRouter;