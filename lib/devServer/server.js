const path = require('path');
const shell = require('shelljs');
const option = require('../options');

module.exports = () => {
  const port = option.get('DEV_SERVER_PORT') || 8848;
  const url = option.get('QUARK_BASE_URL') || 'http://47.92.0.168:8000';
  shell.exec(
    `node ${path.resolve(
      __dirname,
      '../../node_modules/webpack-dev-server/bin/webpack-dev-server.js',
    )} --progress --colors --config ${path.resolve(
      __dirname,
      '../../webpack.config.dev.js',
    )} --port ${port} --env.proxy ${url}`,
  );
};
