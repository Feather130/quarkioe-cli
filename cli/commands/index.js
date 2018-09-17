const dev = require('./dev');
const install = require('./install');

module.exports = (program) => {
  dev.command(program);
  install.command(program);
  program.on('*', () => program.help());
  return program;
};
