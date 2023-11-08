import UnusedWebpackPlugin from 'unused-webpack-plugin';
import type { WebpackApplyOptions } from '../types';

export function unusedPlugin({
  config,
  isProduction,
  cwd,
  userConfig: { deadCode },
  srcDir,
}: WebpackApplyOptions) {
  if (isProduction && deadCode) {
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
