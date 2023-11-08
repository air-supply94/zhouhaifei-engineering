import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import type { WebpackApplyOptions } from '../types';

export function caseSensitivePathsPlugin({ config }: WebpackApplyOptions) {
  config.plugin('case-sensitive-paths-webpack-plugin').use(CaseSensitivePathsPlugin);
}
