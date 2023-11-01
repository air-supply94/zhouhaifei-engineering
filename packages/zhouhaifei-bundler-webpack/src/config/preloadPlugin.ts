import PreloadWebpackPlugin from 'preload-webpack-plugin';
import type { interfaces } from '../types';

export function preloadPlugin({
  config,
  isProduction,
  userConfig: { preloadOptions },
}: interfaces.ApplyOptions) {
  if (isProduction && preloadOptions !== false) {
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
