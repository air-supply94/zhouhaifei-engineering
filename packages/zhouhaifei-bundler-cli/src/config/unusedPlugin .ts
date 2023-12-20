import UnusedWebpackPlugin from 'unused-webpack-plugin';
import type { ApplyOptions } from '../types';

export function unusedPlugin({
  config,
  isDevelopment,
  cwd,
  userConfig: { deadCode },
  srcDir,
}: ApplyOptions) {
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
