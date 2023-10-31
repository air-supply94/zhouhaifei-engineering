import ForkTSCheckerPlugin from 'fork-ts-checker-webpack-plugin';
import type { interfaces } from '../types';

export function forkTsCheckerPlugin({ config, userConfig: { forkTsCheckerOptions }}: interfaces.ApplyOptions) {
  if (forkTsCheckerOptions !== false) {
    const options = typeof forkTsCheckerOptions === 'object' ? forkTsCheckerOptions : {};
    config
      .plugin('fork-ts-checker-webpack-plugin')
      .use(ForkTSCheckerPlugin, [options]);
  }
}
