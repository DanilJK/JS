'use strict';
const Koa = require('koa');
const helmet = require('koa-helmet')();
const compress = require('koa-compress')();
const cors = require('@koa/cors')({ allowMethods: ['GET'] });
const koaBody = require('koa-body')();
const router = require('./routes');

const app = new Koa();

app.use(helmet)
    .use(compress)
    .use(cors)
    .use(koaBody)
    .use(router.routes());

module.exports = app;