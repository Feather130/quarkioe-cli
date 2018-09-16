const options = require('../lib/options');

function parse(program) {
  if (program.url) {
    options.set('QUARK_BASE_URL', program.url);
  }
}

module.exports = (program) => {
  const programs = program.option(
    '-u, --url <url>',
    'The url of the remote instance.',
  );

  const parseOpt = program.parseOptions.bind(program);
  programs.parseOptions = (argv) => {
    const parsed = parseOpt(argv);
    parse(program);
    return parsed;
  };
  return programs;
};
