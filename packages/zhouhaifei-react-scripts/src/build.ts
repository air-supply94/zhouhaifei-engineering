import webpack from 'webpack';
import { getConfig } from './config/config';
import type { interfaces } from './types';

export async function build(options: interfaces.UserConfigInternal) {
  const config = await getConfig({
    ...options,
    env: 'production',
  });

  const compiler = webpack(config);
  compiler.run((err, stats) => {
    if (err) {
      console.error(err.stack || err);
    } else {
      const info = stats.toJson();
      if (stats.hasErrors()) {
        console.error(info.errors);
      } else {
        if (stats.hasWarnings()) {
          console.warn(info.warnings);
        }
      }
    }
  });
}
