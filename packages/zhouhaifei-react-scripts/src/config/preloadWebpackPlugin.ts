import PreloadWebpackPlugin from 'preload-webpack-plugin';
import { interfaces } from '../types';

export function preloadWebpackPlugin({
  config,
  env,
  userConfig: { preloadOptions },
}: interfaces.ApplyOptions) {
  if (env === interfaces.Env.production && preloadOptions !== false) {
    const options = typeof preloadOptions === 'object' ? preloadOptions : {};
    config
      .plugin('preload-webpack-plugin')
      .use(PreloadWebpackPlugin, [
        {
          rel: 'prefetch',
          ...options,
        },
      ]);
  }
}
