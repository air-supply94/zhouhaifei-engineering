import type { WebpackApplyOptions } from '../types';

export function devServerPlugin({
  userConfig: {
    proxy,
    port,
    host,
    publicPath,
    publicDir,
  },
  cwd,
  isDevelopment,
  config,
}: WebpackApplyOptions) {
  if (!isDevelopment) {
    return;
  }

  config.devServer
    .proxy(proxy)
    .open(false)
    .hot(true)
    .allowedHosts
    .add('all')
    .end()
    .compress(true)
    .headers({
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
    })
    .set('client', {
      logging: 'none',
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: false,
    })
    .host(host)
    .port(port)
    .historyApiFallback({ disableDotRule: true })
    .set('devMiddleware', { publicPath })
    .set('static', {
      directory: publicDir,
      publicPath,
      watch: { aggregateTimeout: 600 },
    });
}
