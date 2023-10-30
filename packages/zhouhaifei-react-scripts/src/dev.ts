import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import { getConfig } from './config/config';
import { interfaces } from './types';

export async function dev(options: interfaces.DevOptions) {
  const config = await getConfig({
    ...options,
    env: interfaces.Env.development,
  });
  const compiler = webpack(config);
  const devServer = new WebpackDevServer(config.devServer, compiler);

  devServer.startCallback();
}
