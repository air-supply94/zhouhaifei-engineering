import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import { getConfig } from './config/config';
import type { interfaces } from './types';

export async function start(options: interfaces.UserConfigInternal) {
  const config = await getConfig({
    ...options,
    env: 'development',
  });
  const compiler = webpack(config);
  const devServer = new WebpackDevServer(config.devServer, compiler);

  devServer.startCallback();
}
