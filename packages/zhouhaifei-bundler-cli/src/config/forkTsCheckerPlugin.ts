import ForkTSCheckerPlugin from 'fork-ts-checker-webpack-plugin';
import type { ApplyOptions } from '../types';

export function forkTsCheckerPlugin({ config, userConfig: { forkTsCheckerOptions }}: ApplyOptions) {
  if (forkTsCheckerOptions !== false) {
    config
      .plugin('fork-ts-checker-webpack-plugin')
      .use(ForkTSCheckerPlugin, [forkTsCheckerOptions]);
  }
}
