import PreloadWebpackPlugin from 'preload-webpack-plugin';
import type { WebpackApplyOptions } from '../types';

export function preloadPlugin({
  config,
  isDevelopment,
  userConfig: { preloadOptions },
}: WebpackApplyOptions) {
  if (!isDevelopment && preloadOptions !== false) {
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
