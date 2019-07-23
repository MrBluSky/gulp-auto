#!/usr/bin/env node

'use strict';
const commander = require('commander'),
    chalk = require('chalk'),
    ora = require('ora'),
    utils = require('../utils'),
    exec = require('../lib/exec'),
    packages = require('../package.json');
    
const { Logger } = utils;
const spinner = ora(chalk.cyan('编译中...\n')).start();

commander
  .option('-d, --fileDir [fileDir]', '文件目录')
  .parse(process.argv);

const appName = commander.fileDir;
const type = 'less';
if(!appName){
  Logger.info(chalk.red('parse [file] 不能为空！'));
  process.exit();
}

process.env.fileDir = appName;
process.env.appDir = process.cwd();

switch(type){
  case 'less': 
    exec('gulp less', 'gulp less');
    break;
  default:
    Logger.info(chalk.red('文件类型不合法！'));
    process.exit();
}

spinner.succeed(chalk.green('编译成功!'));
