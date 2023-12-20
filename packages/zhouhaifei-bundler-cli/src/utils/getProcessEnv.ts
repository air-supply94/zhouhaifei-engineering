import type { Env, UserConfig, WebpackConfigOptions } from '../types';

export function getProcessEnv(userEnv: WebpackConfigOptions['userEnv'], publicPath: UserConfig['publicPath'], env: Env, processEnvPrefix: UserConfig['processEnvPrefix']) {
  const extraEnv: Record<string, string> = Object.keys(process.env)
    .filter((key) => {
      if (processEnvPrefix instanceof RegExp) {
        return processEnvPrefix.test(key);
      } else {
        return false;
      }
    })
    .reduce((prev, currentValue) => {
      prev[currentValue] = process.env[currentValue];
      return prev;
    }, {});

  return {
    ...extraEnv,
    ...userEnv,
    NODE_ENV: env,
    PUBLIC_URL: publicPath,
    CLI_TOOL: process.env.CLI_TOOL,
  };
}
