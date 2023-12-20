import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import type { ApplyOptions } from '../types';

export function caseSensitivePathsPlugin({ config }: ApplyOptions) {
  config.plugin('case-sensitive-paths-webpack-plugin').use(CaseSensitivePathsPlugin);
}
