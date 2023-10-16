import { openBrowser } from '../react-dev-utils/openBrowser';
import url from 'url';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import { utils } from '../config/utils';
import { webpackConfig } from '../config/webpack.config';
import { createDevServerConfig } from '../config/webpackDevServer.config';

function runDev() {
  const compiler = webpack(webpackConfig());
  const serverConfig: any = createDevServerConfig();
  const devServer = new WebpackDevServer(serverConfig, compiler);

  devServer.startCallback(() => {
    const hostname = utils.host === '0.0.0.0' || utils.host === '::' ? 'localhost' : utils.host;

    const localUrlForBrowser = url.format({
      protocol: utils.protocol,
      hostname,
      port: utils.port,
      pathname: utils.publicUrlOrPath,
    });
    openBrowser(localUrlForBrowser, true);
  });
}

runDev();
