import ForkTSCheckerPlugin from 'fork-ts-checker-webpack-plugin';
import type { WebpackApplyOptions } from '../types';

export function forkTsCheckerPlugin({ config, userConfig: { forkTsCheckerOptions }}: WebpackApplyOptions) {
  if (forkTsCheckerOptions !== false) {
    config
      .plugin('fork-ts-checker-webpack-plugin')
      .use(ForkTSCheckerPlugin, [forkTsCheckerOptions]);
  }
}
