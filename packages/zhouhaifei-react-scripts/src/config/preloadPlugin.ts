import PreloadWebpackPlugin from 'preload-webpack-plugin';
import { interfaces } from '../types';

export function preloadPlugin({
  config,
  env,
  userConfig: { preloadOptions },
}: interfaces.ApplyOptions) {
  if (env === interfaces.Env.production && preloadOptions !== false) {
    config
      .plugin('preload-webpack-plugin')
      .use(PreloadWebpackPlugin, [
        {
          rel: 'prefetch',
          ...preloadOptions,
        },
      ]);
  }
}
