import fs from 'fs';
import path from 'path';
import { config } from 'dotenv';
import { expand } from 'dotenv-expand';

export function loadEnv(opts: { cwd: string; envFile: string; }): Record<string, string> {
  const dotenv = path.resolve(opts.cwd, opts.envFile);
  const NODE_ENV = process.env.NODE_ENV;
  const dotenvFiles = [
    `${dotenv}.${NODE_ENV}.local`,
    `${dotenv}.${NODE_ENV}`,
    dotenv,
  ].filter(Boolean);

  let envConfig: Record<string, string> = {};
  dotenvFiles.forEach((dotenvFile) => {
    if (fs.existsSync(dotenvFile)) {
      const parseConfig = config({ path: dotenvFile });
      envConfig = {
        ...envConfig,
        ...parseConfig?.parsed || {},
      };
      expand(parseConfig);
    }
  });

  return envConfig;
}
