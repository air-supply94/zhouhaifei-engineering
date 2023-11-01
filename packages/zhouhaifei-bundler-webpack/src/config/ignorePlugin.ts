import type { interfaces } from '../types';
import webpack from 'webpack';

export function ignorePlugin({
  config,
  userConfig: { ignoreMomentLocale },
}: interfaces.ApplyOptions) {
  if (ignoreMomentLocale) {
    config.plugin('ignore-moment-locale').use(webpack.IgnorePlugin, [
      {
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
      },
    ]);
  }
}
