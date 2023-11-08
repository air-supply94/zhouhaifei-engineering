import { WebpackManifestPlugin } from 'webpack-manifest-plugin';
import type { WebpackApplyOptions } from '../types';

export function manifestPlugin({
  config,
  isProduction,
  userConfig: { manifestOptions },
}: WebpackApplyOptions) {
  if (isProduction) {
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
