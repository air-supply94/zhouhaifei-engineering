import type { interfaces } from '../types';
import webpack from 'webpack';

type Options = interfaces.ApplyOptions & { userEnv: interfaces.ConfigOptions['userEnv']; };

export function definePlugin({
  config,
  env,
  userConfig: { define, publicPath },
  userEnv,
}: Options) {
  const defineEnv = {};
  if (define) {
    for (const key in define) {
      if (Object.prototype.hasOwnProperty.call(define, key)) {
        defineEnv[key] = JSON.stringify(define[key]);
      }
    }
  }

  const processEnvOptions = {
    ...userEnv,
    NODE_ENV: env,
    PUBLIC_URL: publicPath,
  };
  const processEnv = {};
  for (const key in processEnvOptions) {
    if (Object.prototype.hasOwnProperty.call(processEnvOptions, key)) {
      processEnv[key] = JSON.stringify(processEnvOptions[key]);
    }
  }

  config.plugin('define-plugin').use(webpack.DefinePlugin, [
    {
      'process.env': processEnv,
      ...defineEnv,
    },
  ]);
}
