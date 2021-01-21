'use strict';

const assert = require('assert').strict;
const itemModel = require('../db/models/item.model');

function test() {
  assert(itemModel);
  console.log(itemModel);
  assert(itemModel.itemType);
  assert.equal(typeof(itemModel.itemType), 'object');
  assert.equal(typeof(itemModel.itemType.fruits), 'string');
  assert.equal(typeof(itemModel.itemType.default), 'string');
  assert(itemModel.itemType)
}

test()
