import { interfaces } from '../types';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';

export function manifestPlugin({
  config,
  env,
  userConfig: { manifestOptions },
}: interfaces.ApplyOptions) {
  if (env === interfaces.Env.production) {
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
