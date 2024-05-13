import ReactRefreshWebpackPlugin from 'react-refresh-webpack-plugin';
import type { ApplyOptions } from '../types';

export function reactRefreshPlugin({ config, userConfig: { reactRefresh } }: ApplyOptions) {
  if (reactRefresh) {
    config.plugin('react-refresh-webpack-plugin').use(ReactRefreshWebpackPlugin);
  }
}
