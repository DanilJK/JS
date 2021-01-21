'use strict';

const assert = require('assert').strict;
const config = require('./config');

function test() {
  assert(config);
  console.log(config);
  assert(config.database);
  assert(config.database.connectionString);
  assert(config.server);
  assert.equal(config.server.port, 3000);
  assert.equal(typeof(config.server), 'object');
}

test()
