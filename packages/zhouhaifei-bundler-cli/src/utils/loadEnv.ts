import fs from 'fs';
import path from 'path';
import { config } from 'dotenv';
import { expand } from 'dotenv-expand';

export function loadEnv(cwd: string, envFile: string): Record<string, string> {
  const dotenv = path.resolve(cwd, envFile);
  const NODE_ENV = process.env.NODE_ENV;
  const dotenvFiles = [dotenv, `${dotenv}.local`, `${dotenv}.${NODE_ENV}`, `${dotenv}.${NODE_ENV}.local`].filter(Boolean);

  let envConfig: Record<string, string> = {};
  dotenvFiles.forEach((dotenvFile) => {
    if (fs.existsSync(dotenvFile)) {
      const parseConfig = config({ path: dotenvFile });
      envConfig = {
        ...envConfig,
        ...(parseConfig?.parsed || {}),
      };
      expand(parseConfig);
    }
  });

  return envConfig;
}
