import webpack from 'webpack';
import type { WebpackApplyOptions, WebpackConfigOptions } from '../types';
import { getProcessEnv } from '../utils/getProcessEnv';

type Options = WebpackApplyOptions & { userEnv: WebpackConfigOptions['userEnv']; };

export function definePlugin({
  config,
  env,
  userConfig: {
    define,
    publicPath,
    processEnvPrefix,
  },
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

  const processEnvOptions = getProcessEnv(userEnv, publicPath, env, processEnvPrefix);
  const processEnv = {};
  for (const key in processEnvOptions) {
    if (Object.prototype.hasOwnProperty.call(processEnvOptions, key)) {
      processEnv[key] = JSON.stringify(processEnvOptions[key]);
    }
  }

  config.plugin('define-plugin')
    .use(webpack.DefinePlugin, [
      {
        'process.env': processEnv,
        ...defineEnv,
      },
    ]);
}
