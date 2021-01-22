'use strict';

require('dotenv').config();
const fs = require('fs');
const path = require('path');

const config = {};
const APP_PATH = process.cwd();
const CONFIG_PATH = path.join(APP_PATH, 'config');
const basePath = path.join(CONFIG_PATH, 'components');

fs.readdirSync(basePath).forEach(file => {
  const componentConfig = require(path.join(basePath, file));
  Object.assign(config, componentConfig);
});

module.exports = config;
