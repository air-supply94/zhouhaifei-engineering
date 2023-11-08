import type { Env, UserConfig, WebpackConfigOptions } from '../types';

export function getProcessEnv(userEnv: WebpackConfigOptions['userEnv'], publicPath: UserConfig['publicPath'], env: Env) {
  return {
    ...userEnv,
    NODE_ENV: env,
    PUBLIC_URL: publicPath,
    CLI_TOOL: process.env.CLI_TOOL,
  };
}
