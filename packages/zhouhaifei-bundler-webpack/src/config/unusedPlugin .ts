import type { interfaces } from '../types';
import UnusedWebpackPlugin from 'unused-webpack-plugin';

export function unusedPlugin({
  config,
  isProduction,
  cwd,
  userConfig: { deadCode },
  srcDir,
}: interfaces.ApplyOptions) {
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
