import webpack from 'webpack';
import { getConfig } from './config/config';
import { interfaces } from './types';

export async function build({
  userConfig = {},
  ...rest
}: interfaces.BuildOptions) {
  const config = await getConfig({
    ...rest,
    userConfig,
    env: interfaces.Env.production,
  });

  const compiler = webpack(config);
  compiler.run((err, stats) => {
    if (err) {
      console.error(err.stack || err);
    } else {
      const info = stats.toJson();
      if (stats.hasErrors()) {
        console.error(info.errors);
      }
    }
  });
}
