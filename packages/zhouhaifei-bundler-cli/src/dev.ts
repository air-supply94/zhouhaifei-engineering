import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import { config } from './config/config';
import { openBrowser } from './utils';
import url from 'url';
import type { DevOptions } from './types';
import { Env } from './types';

export async function dev({ cwd, userConfig = {}, ...rest }: DevOptions) {
  const webpackConfig = await config({
    ...rest,
    env: Env.development,
    cwd,
    userConfig,
  });
  const devServerConfig = webpackConfig.devServer;
  delete webpackConfig.devServer;

  const protocol = 'http';
  const { host, port, open } = userConfig;
  const openUrl = url.format({
    protocol,
    hostname: host === '0.0.0.0' || host === '::' ? 'localhost' : host,
    port,
    pathname: '/',
  });

  const compiler = webpack(webpackConfig);
  const server = new WebpackDevServer(devServerConfig, compiler);
  await server.start();
  if (open) {
    openBrowser(openUrl, true);
  }
}
