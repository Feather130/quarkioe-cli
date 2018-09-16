const runLocalServer = require('../../lib/devServer').run;
const options = require('../../lib/options');

module.exports.command = (program) => {
  const programs = program
    .command('dev')
    .alias('d')
    .description('Run local development server')
    .option(
      '-o, --port [port]',
      'Port for the local development server. Default is 8848',
      8848,
    )
    .action(() => {
      options.set('DEV_SERVER_PORT', programs.port);
      runLocalServer();
    });
};
