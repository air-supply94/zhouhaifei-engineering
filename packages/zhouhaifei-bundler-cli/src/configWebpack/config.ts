import crypto from 'crypto';
import path from 'path';
import type { Configuration } from 'webpack';
import webpack from 'webpack';
import Config from 'webpack-5-chain';
import { DEFAULT_SRC_DIR, version } from '../constants';
import type { WebpackApplyOptions, WebpackConfigOptions } from '../types';
import { Env } from '../types';
import { antdMomentPlugin } from './antdMomentPlugin';
import { assetRule } from './assetRule';
import { bundleAnalyzerPlugin } from './bundleAnalyzerPlugin';
import { caseSensitivePathsPlugin } from './caseSensitivePathsPlugin';
import { compressPlugin } from './compressPlugin';
import { copyPlugin } from './copyPlugin';
import { cssRule } from './cssRule';
import { definePlugin } from './definePlugin';
import { devServerPlugin } from './devServerPlugin';
import { forkTsCheckerPlugin } from './forkTsCheckerPlugin';
import { htmlPlugin } from './htmlPlugin';
import { ignorePlugin } from './ignorePlugin';
import { javascriptRule } from './javascriptRule';
import { manifestPlugin } from './manifestPlugin';
import { miniCssExtractPlugin } from './miniCssExtractPlugin';
import { optimization } from './optimization';
import { preloadPlugin } from './preloadPlugin';
import { progressPlugin } from './progressPlugin';
import { reactRefreshPlugin } from './reactRefreshPlugin';
import { speedMeasurePlugin } from './speedMeasurePlugin';
import { unusedPlugin } from './unusedPlugin ';

function createEnvironmentHash(userEnv: WebpackConfigOptions['userEnv']) {
  const hash = crypto.createHash('md5');
  hash.update(JSON.stringify(userEnv));

  return hash.digest('hex');
}

export async function config(options: WebpackConfigOptions): Promise<Configuration> {
  const {
    userConfig = {},
    env,
    cwd,
    entry = {},
    userEnv = {},
  } = options;
  const config = new Config();
  const isDevelopment = env === Env.development;
  const {
    outputPath,
    staticPathPrefix,
    externals,
    alias,
    publicPath,
    sourcemap,
    chainWebpack,
    cache,
  } = userConfig;
  const applyOptions: WebpackApplyOptions = {
    config,
    userConfig,
    cwd,
    env,
    isDevelopment,
    srcDir: path.resolve(cwd, DEFAULT_SRC_DIR),
  };

  // watchOptions
  config.watchOptions({
    aggregateTimeout: 300,
    poll: false,
    ignored: /node_modules/,
  });

  // cache
  config.cache({
    type: 'filesystem',
    version: version + createEnvironmentHash(userEnv),
    cacheDirectory: path.resolve(cwd, cache.cacheDirectory),
    buildDependencies: { config: cache.buildDependencies },
  });

  // entry
  Object.keys(entry)
    .forEach((key) => {
      config
        .entry(key)
        .add(entry[key])
        .end();
    });

  // stats、mode、bail、devtool、profile、performance
  config.performance(false);
  config.stats('none');
  config.mode(options.env);
  config.bail(!isDevelopment);
  config.devtool(sourcemap);

  // resolve
  config.resolve
    .symlinks(true)
    .modules
    .add('node_modules')
    .end()
    .alias
    .merge(alias)
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

  // output
  config.output
    .clean(true)
    .path(path.resolve(cwd, outputPath))
    .filename(isDevelopment ? '[name].js' : '[name].[contenthash].js')
    .chunkFilename(isDevelopment ? '[name].async.js' : '[name].[contenthash].async.js')
    .publicPath(publicPath)
    .pathinfo(true)
    .set('assetModuleFilename', `${staticPathPrefix}[name].[hash][ext]`)
    .set('hashFunction', 'xxhash64');

  config
    .externalsType('window')
    .externals(externals);

  // target
  config.target([
    'web',
    'es5',
  ]);

  // experiments
  config.experiments({ topLevelAwait: true });

  // module
  assetRule(applyOptions);
  cssRule(applyOptions);
  javascriptRule(applyOptions);

  // plugins
  definePlugin({
    ...applyOptions,
    userEnv,
  });
  ignorePlugin(applyOptions);
  caseSensitivePathsPlugin(applyOptions);
  htmlPlugin(applyOptions);
  speedMeasurePlugin(applyOptions);
  progressPlugin(applyOptions);
  forkTsCheckerPlugin(applyOptions);
  preloadPlugin(applyOptions);
  miniCssExtractPlugin(applyOptions);
  bundleAnalyzerPlugin(applyOptions);
  copyPlugin(applyOptions);
  manifestPlugin(applyOptions);
  unusedPlugin(applyOptions);
  reactRefreshPlugin(applyOptions);
  compressPlugin(applyOptions);
  antdMomentPlugin(applyOptions);
  optimization(applyOptions);

  devServerPlugin(applyOptions);

  // chain webpack
  if (chainWebpack) {
    await chainWebpack(config, {
      env,
      webpack,
    });
  }

  return config.toConfig();
}
