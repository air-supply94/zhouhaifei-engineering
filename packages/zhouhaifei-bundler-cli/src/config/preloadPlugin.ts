import PreloadWebpackPlugin from 'preload-webpack-plugin';
import type { ApplyOptions } from '../types';

export function preloadPlugin({ config, isDevelopment, userConfig: { preloadOptions } }: ApplyOptions) {
  if (!isDevelopment && preloadOptions !== false) {
    config.plugin('preload-webpack-plugin').use(PreloadWebpackPlugin, [
      {
        rel: 'prefetch',
        ...preloadOptions,
      },
    ]);
  }
}
