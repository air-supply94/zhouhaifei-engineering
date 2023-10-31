import { interfaces } from '../types';
import UnusedWebpackPlugin from 'unused-webpack-plugin';
import path from 'path';

export function unusedPlugin({
  config,
  env,
  cwd,
  userConfig: { deadCode },
}: interfaces.ApplyOptions) {
  if (env === interfaces.Env.production && deadCode) {
    config
      .plugin('unused-webpack-plugin')
      .use(UnusedWebpackPlugin, [
        {
          directories: [path.join(cwd, 'src')],
          root: cwd,
          ...deadCode,
        },
      ]);
  }
}
