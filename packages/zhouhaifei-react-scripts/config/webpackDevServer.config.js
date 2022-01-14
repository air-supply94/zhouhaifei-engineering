'use strict';

const fs = require('fs');
const ignoredFiles = require('../react-dev-utils/ignoredFiles');
const getHttpsConfig = require('./getHttpsConfig');
const paths = require('./paths');
const utils = require('./utils');

module.exports = function(allowedHost) {
  return {
    disableHostCheck: false,

    // Enable gzip compression of generated files.
    compress: true,

    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*',
    },

    /*
     * Silence WebpackDevServer's own logs since they're generally not useful.
     * It will still show compile warnings and errors with this setting.
     */
    clientLogLevel: 'none',

    contentBase: paths.appPublic,
    contentBasePublicPath: utils.publicUrlOrPath,

    // By default files from `contentBase` will not trigger a page reload.
    watchContentBase: true,

    hot: true,

    injectClient: true,

    sockHost: utils.sockHost,
    sockPath: utils.sockPath,
    sockPort: utils.sockPort,

    publicPath: utils.publicUrlOrPath.slice(0, -1),

    quiet: true,

    watchOptions: {
      aggregateTimeout: 600,
      ignored: ignoredFiles(paths.appSrc),
    },
    https: getHttpsConfig(),
    host: utils.host,
    overlay: false,
    historyApiFallback: {
      disableDotRule: true,
      index: utils.publicUrlOrPath,
    },
    public: allowedHost,

    before(app, server) {
      if (fs.existsSync(paths.proxySetup)) {
        require(paths.proxySetup)(app, require('http-proxy-middleware'));
      }

      if (utils.isMock) {
        require('./mock')(server);
      }
    },
  };
};
