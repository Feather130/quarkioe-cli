#! /usr/bin/env node

const program = require('commander');
const VERSION = require('../package.json').version;
const commands = require('./commands');
const options = require('./options');

program.version(VERSION);
commands(program);
options(program);

program.parse(process.argv);
if (process.argv.length < 3) {
  program.help();
}
