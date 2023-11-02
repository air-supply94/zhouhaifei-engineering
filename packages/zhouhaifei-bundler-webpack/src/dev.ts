import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import { getConfig } from './config/config';
import { interfaces } from './types';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import path from 'path';

export async function dev({
  port,
  host,
  cwd,
  userConfig = {},
  ...rest
}: interfaces.DevOptions) {
  const webpackConfig = await getConfig({
    ...rest,
    env: interfaces.Env.development,
    cwd,
    userConfig,
  });

  const compiler = webpack(webpackConfig);
  const devServerOptions: DevServerConfiguration = {
    proxy: userConfig.proxy,
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
    host: host ? host : process.env.HOST || '0.0.0.0',
    port: port ? port : parseInt(process.env.PORT, 10) || 3000,
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
}
