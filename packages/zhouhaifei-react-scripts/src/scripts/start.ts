import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

function runDev() {
  const compiler = webpack({});
  const serverConfig = {};
  const devServer = new WebpackDevServer(serverConfig, compiler);

  devServer.startCallback();
}

runDev();
