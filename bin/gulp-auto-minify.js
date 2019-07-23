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
  .option('-t, --type [js|css|images]', '文件类型')
  .option('-d, --fileDir [fileDir]', '文件目录')
  .parse(process.argv);

const type = commander.type;
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
    exec('gulp minify', 'gulp minify');
    break;
  case 'css': 
    exec('gulp minify', 'gulp minify');
    break;
  case 'images': 
    exec('gulp minify', 'gulp minify');
    break;
  default:
    Logger.info(chalk.red('文件类型不合法！'));
    process.exit();
}

spinner.succeed(chalk.green('压缩成功!'));
