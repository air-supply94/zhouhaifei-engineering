import { WebpackManifestPlugin } from 'webpack-manifest-plugin';
import type { WebpackApplyOptions } from '../types';

export function manifestPlugin({
  config,
  isDevelopment,
  userConfig: { manifestOptions },
}: WebpackApplyOptions) {
  if (!isDevelopment && manifestOptions !== false) {
    config
      .plugin('webpack-manifest-plugin')
      .use(WebpackManifestPlugin, [
        {
          fileName: 'asset-manifest.json',
          ...manifestOptions,
        },
      ]);
  }
}
