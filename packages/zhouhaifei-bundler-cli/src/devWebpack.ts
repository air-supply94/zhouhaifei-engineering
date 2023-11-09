import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import { config } from './configWebpack/config';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import path from 'path';
import { openBrowser } from './utils';
import url from 'url';
import type { WebpackDevOptions } from './types';
import { Env } from './types';

export async function devWebpack({
  cwd,
  userConfig = {},
  ...rest
}: WebpackDevOptions) {
  const webpackConfig = await config({
    ...rest,
    env: Env.development,
    cwd,
    userConfig,
  });

  const protocol = 'http';
  const {
    host,
    port,
    proxy,
    open,
  } = userConfig;
  const openUrl = url.format({
    protocol,
    hostname: host === '0.0.0.0' || host === '::' ? 'localhost' : host,
    port,
    pathname: '/',
  });

  const compiler = webpack(webpackConfig);
  const devServerOptions: DevServerConfiguration = {
    proxy,
    open: false,
    hot: true,
    allowedHosts: 'all',
    compress: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': [
        'GET',
        'HEAD',
        'PUT',
        'POST',
        'PATCH',
        'DELETE',
        'OPTIONS',
      ].join(', '),
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
    client: {
      logging: 'none',
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: false,
    },
    host,
    port,
    historyApiFallback: { disableDotRule: true },
    devMiddleware: { publicPath: webpackConfig.output.publicPath },
    static: {
      directory: path.resolve(cwd, 'public'),
      publicPath: webpackConfig.output.publicPath as string,
      watch: { aggregateTimeout: 600 },
    },
  };
  const server = new WebpackDevServer(devServerOptions, compiler);
  await server.start();
  if (open) {
    openBrowser(openUrl, true);
  }
}
