'use strict';

const assert = require('assert').strict;
const db = require('../db').default;
const config = require('./config');
const mongoose = require('mongoose');

db.init(`${config.database.connectionString}`).then(async ()=>{
  assert(mongoose);
  assert(db);
  console.log(db);
  const insertName = { name:'unitTest' };
  const insert = await db.ItemService(insertName).create();
  assert(insert);
  const existsName = { name:'empty' };
  const exists = await db.ItemService(existsName);
  assert(exists);
  const items = await db.ItemService().getMany('name weight');
  assert(items);
  console.log(items);
});
