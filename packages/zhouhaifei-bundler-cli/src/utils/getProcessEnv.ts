import type { Env, UserConfig, WebpackConfigOptions } from '../types';
import { getPublicUrl } from './getPublicUrl';

export function getProcessEnv(userEnv: WebpackConfigOptions['userEnv'], publicPath: UserConfig['publicPath'], env: Env) {
  return {
    ...userEnv,
    NODE_ENV: env,
    PUBLIC_URL: getPublicUrl(publicPath),
    CLI_TOOL: process.env.CLI_TOOL,
  };
}
