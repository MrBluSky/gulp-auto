#!/usr/bin/env node

'use strict';
const commander = require('commander'),
    chalk = require('chalk'),
    ora = require('ora'),
    utils = require('../utils'),
    exec = require('../lib/exec'),
    packages = require('../package.json');
    
const { Logger } = utils;
const spinner = ora(chalk.cyan('压缩中...\n')).start();

commander
  .option('-d, --fileDir [fileDir]', '文件目录')
  .parse(process.argv);

const type = commander.args[0];
const appName = commander.fileDir;

if(!type){
  Logger.info(chalk.red('请选择文件类型！'));
  process.exit();
}

if(!appName){
  Logger.info(chalk.red('minify [file] 不能为空！'));
  process.exit();
}

process.env.fileDir = appName;
process.env.appDir = process.cwd();

switch(type){
  case 'js': 
    exec('gulp js', 'gulp js');
    break;
  case 'css': 
    exec('gulp css', 'gulp css');
    break;
  case 'images': 
    exec('gulp images', 'gulp images');
    break;
  case 'build': 
    exec('gulp build', 'gulp build');
    break;
  default:
    Logger.info(chalk.red('文件类型不合法！'));
    process.exit();
}

spinner.succeed(chalk.green('压缩成功!'));
