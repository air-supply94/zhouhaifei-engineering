import fs from 'fs';
import path from 'path';
import { config } from 'dotenv';
import { expand } from 'dotenv-expand';

export function loadEnv(opts: { cwd: string; envFile: string; }) {
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
}

const REACT_APP = /^REACT_APP_/i;

export function getClientEnvironment(publicUrl) {
  const raw = Object.keys(process.env).filter((key) => REACT_APP.test(key))
    .reduce(
      (env, key) => {
        env[key] = process.env[key];
        return env;
      },
      {
        SERVICE_WORKER: process.env.SERVICE_WORKER || 'NO',
        NODE_ENV: process.env.NODE_ENV || 'development',
        PUBLIC_URL: publicUrl,
        WDS_SOCKET_HOST: process.env.WDS_SOCKET_HOST,
        WDS_SOCKET_PATH: process.env.WDS_SOCKET_PATH,
        WDS_SOCKET_PORT: process.env.WDS_SOCKET_PORT,
      }
    );

  // Stringify all values so we can feed into webpack DefinePlugin
  const stringified = {
    'process.env': Object.keys(raw).reduce((env, key) => {
      env[key] = JSON.stringify(raw[key]);
      return env;
    }, {}),
  };

  return {
    raw,
    stringified,
  };
}
