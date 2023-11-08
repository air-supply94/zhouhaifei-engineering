import PreloadWebpackPlugin from 'preload-webpack-plugin';
import type { WebpackApplyOptions } from '../types';

export function preloadPlugin({
  config,
  isProduction,
  userConfig: { preloadOptions },
}: WebpackApplyOptions) {
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
