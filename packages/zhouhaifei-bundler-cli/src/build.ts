import webpack from 'webpack';
import { config } from './config/config';
import type { BuildOptions } from './types';
import { Env } from './types';

export async function build({ userConfig = {}, ...rest }: BuildOptions) {
  const { watch } = userConfig;
  const webpackConfig = await config({
    ...rest,
    userConfig,
    env: Env.production,
  });
  webpackConfig.devServer = undefined;

  return new Promise((resolve, reject) => {
    const compiler = webpack(webpackConfig);
    const handler: Parameters<typeof compiler.run>[0] = (err, stats) => {
      // generate valid error from normal error and stats error
      const validErr = err || (stats?.hasErrors() ? new Error(stats!.toString('errors-only')) : null);

      if (validErr) {
        if (stats?.hasErrors()) {
          console.error(validErr.toString());
        }
        reject(validErr);
      } else {
        resolve(stats!);
      }

      // close compiler after normal build
      if (!watch) {
        compiler.close(() => {
          //
        });
      }
    };

    // handle watch mode
    if (watch) {
      const watching = compiler.watch(webpackConfig.watchOptions || {}, handler);

      watching.close.bind(watching);
    } else {
      compiler.run(handler);
    }
  });
}
