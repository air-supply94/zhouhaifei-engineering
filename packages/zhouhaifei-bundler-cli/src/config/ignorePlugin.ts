import webpack from 'webpack';
import type { ApplyOptions } from '../types';

export function ignorePlugin({ config, userConfig: { ignoreMomentLocale } }: ApplyOptions) {
  if (ignoreMomentLocale !== false) {
    config.plugin('ignore-moment-locale').use(webpack.IgnorePlugin, [
      {
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
      },
    ]);
  }
}
