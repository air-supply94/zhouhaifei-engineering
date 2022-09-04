'use strict';

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

process.on('unhandledRejection', (err) => {
  throw err;
});

// Ensure environment variables are read.
require('../config/env');

const url = require('url');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const paths = require('../config/paths');
const utils = require('../config/utils');
const configFactory = require('../config/webpack.config');
const createDevServerConfig = require('../config/webpackDevServer.config');
const checkBrowsers = require('../react-dev-utils/checkBrowsers');
const checkRequiredFiles = require('../react-dev-utils/checkRequiredFiles');
const openBrowser = require('../react-dev-utils/openBrowser');

async function runDev() {
  await checkRequiredFiles([
    paths.appIndexJs,
    paths.appIndexEjs,
  ]);
  await checkBrowsers(paths.appPath);

  const compiler = webpack(configFactory());
  const serverConfig = createDevServerConfig();
  const devServer = new WebpackDevServer(serverConfig, compiler);

  devServer.startCallback(() => {
    const hostname = utils.host === '0.0.0.0' || utils.host === '::' ? 'localhost' : utils.host;

    const localUrlForBrowser = url.format({
      protocol: utils.protocol,
      hostname,
      port: utils.port,
      pathname: utils.publicUrlOrPath,
    });
    openBrowser(localUrlForBrowser);
  });

  [
    'SIGINT',
    'SIGTERM',
  ].forEach((sig) => {
    process.on(sig, () => {
      if (devServer) {
        devServer.close();
      }
      process.exit();
    });
  });

  if (process.stdout.isTTY) {
    process.stdin.on('end', () => {
      if (devServer) {
        devServer.close();
      }
      process.exit();
    });
    process.stdin.resume();
  }
}

runDev();
