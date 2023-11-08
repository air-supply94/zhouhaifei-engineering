import webpack from 'webpack';
import type { WebpackApplyOptions } from '../types';

export function ignorePlugin({
  config,
  userConfig: { ignoreMomentLocale },
}: WebpackApplyOptions) {
  if (ignoreMomentLocale) {
    config.plugin('ignore-moment-locale').use(webpack.IgnorePlugin, [
      {
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
      },
    ]);
  }
}
