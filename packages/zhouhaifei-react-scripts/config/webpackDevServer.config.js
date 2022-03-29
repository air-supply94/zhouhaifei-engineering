'use strict';

const fs = require('fs');
const bodyParser = require('body-parser');
const ignoredFiles = require('../react-dev-utils/ignoredFiles');
const getHttpsConfig = require('./getHttpsConfig');
const paths = require('./paths');
const utils = require('./utils');

module.exports = function createDevServerConfig() {
  return {
    open: false,
    hot: true,
    allowedHosts: 'all',

    // Enable gzip compression of generated files.
    compress: true,

    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*',
    },

    client: {
      logging: 'none',
      overlay: {
        errors: true,
        warnings: false,
      },
      webSocketURL: {
        hostname: utils.sockHost,
        pathname: utils.sockPath,
        port: utils.sockPort,
      },
      progress: false,
    },
    https: getHttpsConfig(),
    host: utils.host,
    port: utils.port,
    historyApiFallback: {
      disableDotRule: true,
      index: utils.publicUrlOrPath,
    },
    devMiddleware: { publicPath: utils.publicUrlOrPath },
    static: {
      directory: paths.appPublic,
      publicPath: utils.publicUrlOrPath,
      watch: {
        aggregateTimeout: 600,
        ignored: ignoredFiles(paths.appSrc),
      },
    },

    setupMiddlewares(middlewares, devServer) {
      if (utils.isMock) {
        middlewares.push(bodyParser.json({
          limit: '5mb',
          strict: false,
        }));

        middlewares.push(
          bodyParser.urlencoded({
            extended: true,
            limit: '5mb',
          })
        );

        require('./mock')(devServer);
      }

      if (fs.existsSync(paths.proxySetup)) {
        require(paths.proxySetup)(devServer.app, require('http-proxy-middleware'));
      }

      return middlewares;
    },
  };
};
