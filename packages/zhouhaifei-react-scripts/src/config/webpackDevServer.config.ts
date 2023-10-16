import fs from 'fs';
import path from 'path';
import { paths } from './paths.js';
import { utils } from './utils.js';

import { createProxyMiddleware } from 'http-proxy-middleware';
import { loadConfigFile } from '../loadConfigFile';

export function createDevServerConfig() {
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
      watch: { aggregateTimeout: 600 },
    },

    async setupMiddlewares(middlewares, devServer) {
      if (fs.existsSync(paths.proxySetup)) {
        await loadConfigFile({
          baseDir: path.dirname(paths.proxySetup),
          defaultConfigFiles: [path.parse(paths.proxySetup).name + path.extname(paths.proxySetup)],
        })
          .then((proxyModule: any) => {
            proxyModule(devServer.app, createProxyMiddleware, middlewares);
          });
      }

      return middlewares;
    },
  };
}
