import { WebpackManifestPlugin } from 'webpack-manifest-plugin';
import type { ApplyOptions } from '../types';

export function manifestPlugin({ config, isDevelopment, userConfig: { manifestOptions } }: ApplyOptions) {
  if (!isDevelopment && manifestOptions !== false) {
    config.plugin('webpack-manifest-plugin').use(WebpackManifestPlugin, [
      {
        fileName: 'asset-manifest.json',
        ...manifestOptions,
      },
    ]);
  }
}
