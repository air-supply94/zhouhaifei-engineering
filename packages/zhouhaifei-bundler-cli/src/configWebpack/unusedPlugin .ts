import UnusedWebpackPlugin from 'unused-webpack-plugin';
import type { WebpackApplyOptions } from '../types';

export function unusedPlugin({
  config,
  isDevelopment,
  cwd,
  userConfig: { deadCode },
  srcDir,
}: WebpackApplyOptions) {
  if (!isDevelopment && deadCode) {
    config
      .plugin('unused-webpack-plugin')
      .use(UnusedWebpackPlugin, [
        {
          directories: srcDir,
          root: cwd,
          ...deadCode,
        },
      ]);
  }
}
