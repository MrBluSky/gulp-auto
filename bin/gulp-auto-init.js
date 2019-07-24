#!/usr/bin/env node

'use strict';
const commander = require('commander'),
    chalk = require('chalk'),
    emptyDir = require('empty-dir'),
    ora = require('ora'),
    path = require('path'),
    utils = require('../utils'),
    exec = require('../lib/exec'),
    packages = require('../package.json');
const { Logger } = utils;
const { name, version } = packages;
const dest = process.cwd();
//Logger.logo();
Logger.info(chalk.yellow('开始创建app'));
const spinner = ora(chalk.cyan('创建中...')).start();

commander
  .option('-t, --template [template]', '指定初始化模版')
  .parse(process.argv);

const appName = commander.args[0];
const appDir = path.join(dest, appName);

if(!appName){
  spinner.fail(chalk.red('创建失败!'));
  Logger.info(chalk.red('init [name] 不能为空！'));
  process.exit();
}

if (!emptyDir(dest)) {
  spinner.fail(chalk.red('创建失败!'));
  Logger.info(chalk.red('该目录不为空, 请选择一个空目录运行 [init]命令!'));
  process.exit();
}

process.env.initRoot = path.join(__dirname, '../');
process.env.initApp = appName;
process.env.appDir = process.cwd();

exec('gulp init', 'gulp init app');
spinner.succeed(chalk.green('创建完成'));