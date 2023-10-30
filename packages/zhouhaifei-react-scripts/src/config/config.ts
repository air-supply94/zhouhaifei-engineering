import type { Configuration } from 'webpack';
import Config from 'webpack-5-chain';
import crypto from 'crypto';
import { interfaces } from '../types';
import { version } from '../utils/constants';
import { resolveFile } from '../utils/lookupFile';

function createEnvironmentHash(userEnv: interfaces.UserConfigInternal['userEnv']) {
  const hash = crypto.createHash('md5');
  hash.update(JSON.stringify(userEnv));

  return hash.digest('hex');
}

export async function getConfig(options: interfaces.UserConfigInternal): Promise<Configuration> {
  await console.log(options, 'options');
  const {
    userConfig,
    env,
    cwd,
    userEnv = {},
    ...rest
  } = options;

  const nodeModules = /node_modules/;
  const isDev = env === interfaces.Env.development;
  const config = new Config();

  const internalConfig: interfaces.UserConfigInternal = {
    userConfig,
    env,
    cwd,
    userEnv,
    ...rest,
    config,
  };

  await internalConfig;

  config.watchOptions({
    aggregateTimeout: 300,
    poll: false,
    ignored: nodeModules,
  });

  config.cache({
    type: 'filesystem',
    version: version + createEnvironmentHash(userEnv),
    cacheDirectory: resolveFile(cwd, '.cache'),
    buildDependencies: { config: [__filename]},
  });

  config.mode(options.env);
  config.bail(!isDev);
  config.devtool(userConfig.devtool === false ? false : isDev ? 'cheap-module-source-map' : 'source-map');

  config.resolve.set('symlinks', true)
    .modules
    .add('node_modules')
    .end()
    .alias
    .merge(userConfig.alias || {})
    .end()
    .extensions
    .merge([
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.mjs',
      '.cjs',
      '.json',
      '.wasm',
    ])
    .end();

  const webpackConfig = config.toConfig();
  return webpackConfig;
}
