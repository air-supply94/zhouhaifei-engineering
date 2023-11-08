import ReactRefreshWebpackPlugin from 'react-refresh-webpack-plugin';
import type { WebpackApplyOptions } from '../types';

export function reactRefreshPlugin({
  config,
  userConfig: { reactRefresh },
}: WebpackApplyOptions) {
  if (reactRefresh) {
    config.plugin('react-refresh-webpack-plugin').use(ReactRefreshWebpackPlugin);
  }
}
