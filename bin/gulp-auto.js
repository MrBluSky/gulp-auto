#!/usr/bin/env node

'use strict';
const commander = require('commander'),
    utils = require('../utils'),
    chalk = require('chalk'),
    packages = require('../package.json');
    
const { Logger } = utils;
const { name, version } = packages;
Logger.logo();

commander
  .command('minify', '压缩文件[js|css|images]')
  .command('watch', '监听文件')
  .command('init', '初始化模版应用')
  .option('-v, --version', '输出当前gulp-auto版本号', function(){
    Logger.info(chalk.yellow(`${name}@${version}`));
  })
  .parse(process.argv);