'use strict';
const chalk = require('chalk'),
      exec = require('child_process').execSync,
      utils = require('../utils');
const { Logger } = utils;

module.exports = function (cmd, desc) {
  if (desc) {
    Logger.info(chalk.yellow(desc));
  }
  exec(cmd, {
    stdio: 'inherit',
    cwd: __dirname
  });
};