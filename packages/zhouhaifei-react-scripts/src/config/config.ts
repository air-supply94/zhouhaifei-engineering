import type { Configuration } from 'webpack';
import Config from 'webpack-5-chain';
import crypto from 'crypto';
import { interfaces } from '../types';
import { version } from '../utils/constants';
import { resolveFile } from '../utils/lookupFile';

function createEnvironmentHash(userEnv: interfaces.ConfigOptions['userEnv']) {
  const hash = crypto.createHash('md5');
  hash.update(JSON.stringify(userEnv));

  return hash.digest('hex');
}

export async function getConfig(options: interfaces.ConfigOptions): Promise<Configuration> {
  const {
    userConfig,
    env,
    cwd,
    entry,
    userEnv = {},
    ...rest
  } = options;

  const nodeModules = /node_modules/;
  const isDev = env === interfaces.Env.development;
  const config = new Config();

  /*  const internalConfig: interfaces.UserConfigInternal = {
    userConfig,
    env,
    cwd,
    userEnv,
    ...rest,
    config,
  };*/

  await rest;

  // watchOptions
  config.watchOptions({
    aggregateTimeout: 300,
    poll: false,
    ignored: nodeModules,
  });

  // cache
  config.cache({
    type: 'filesystem',
    version: version + createEnvironmentHash(userEnv),
    cacheDirectory: resolveFile(cwd, '.cache'),
    buildDependencies: { config: [__filename]},
  });

  // entry
  Object.keys(entry).forEach((key) => {
    const entry = config.entry(key);
    entry.add(entry[key]);
  });

  // stats、mode、bail、devtool
  config.stats('none');
  config.mode(options.env);
  config.bail(!isDev);
  config.devtool(userConfig.devtool === false ? false : isDev ? 'cheap-module-source-map' : 'source-map');

  // resolve
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
