import type { interfaces } from '../types';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';

export function manifestPlugin({
  config,
  isProduction,
  userConfig: { manifestOptions },
}: interfaces.ApplyOptions) {
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
