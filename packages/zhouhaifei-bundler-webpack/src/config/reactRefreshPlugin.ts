import type { interfaces } from '../types';
import ReactRefreshWebpackPlugin from 'react-refresh-webpack-plugin';

export function reactRefreshPlugin({
  config,
  userConfig: { reactRefresh },
}: interfaces.ApplyOptions) {
  if (reactRefresh) {
    config.plugin('react-refresh-webpack-plugin').use(ReactRefreshWebpackPlugin);
  }
}
