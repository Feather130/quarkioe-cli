const options = require('../../lib/options');

module.exports.command = (program) => {
  const programs = program
    .command('install')
    .alias('i')
    .description('Install a Quarkioe UI package using npm.')
    .action(() => {});
};
