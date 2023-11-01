import type { interfaces } from '../types';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';

export function caseSensitivePathsPlugin({ config }: interfaces.ApplyOptions) {
  config.plugin('case-sensitive-paths-webpack-plugin').use(CaseSensitivePathsPlugin);
}
