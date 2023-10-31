import type { Configuration } from 'webpack';
import Config from 'webpack-5-chain';
import crypto from 'crypto';
import { DEFAULT_BROWSER_TARGETS, DEFAULT_BUILD_DEVTOOL, DEFAULT_DEV_DEVTOOL, DEFAULT_OUTPUT_PATH } from '../constants';
import { interfaces } from '../types';
import { version } from '../utils/constants';
import { getBrowsersList } from '../utils/getBrowsersList';
import { resolveFile } from '../utils/lookupFile';
import path from 'path';
import webpack from 'webpack';
import { bundleAnalyzerPlugin } from './bundleAnalyzerPlugin';
import { copyPlugin } from './copyPlugin';
import { forkTsCheckerPlugin } from './forkTsCheckerPlugin';
import { manifestPlugin } from './manifestPlugin';
import { miniCssExtractPlugin } from './miniCssExtractPlugin';
import { preloadPlugin } from './preloadPlugin';
import { definePlugin } from './definePlugin';
import { speedMeasurePlugin } from './speedMeasurePlugin';
import { progressPlugin } from './progressPlugin';
import { ignorePlugin } from './ignorePlugin';
import { harmonyLinkingErrorPlugin } from './harmonyLinkingErrorPlugin';
import { unusedPlugin } from './unusedPlugin ';
import { htmlPlugin } from './htmlPlugin';

function createEnvironmentHash(userEnv: interfaces.ConfigOptions['userEnv']) {
  const hash = crypto.createHash('md5');
  hash.update(JSON.stringify(userEnv));

  return hash.digest('hex');
}

export async function getConfig(options: interfaces.ConfigOptions): Promise<Configuration> {
  const {
    userConfig = {},
    env,
    cwd,
    entry = {},
    staticPathPrefix = 'static/',
    userEnv = {},
    cache = {},
    chainWebpack,
    modifyWebpackConfig,
  } = options;
  userConfig.targets ||= DEFAULT_BROWSER_TARGETS;
  userConfig.inlineLimit ||= 1024 * 8;
  userConfig.publicPath = process.env.PUBLIC_URL || userConfig.publicPath || '/';

  const nodeModules = /node_modules/;
  const isDev = env === interfaces.Env.development;
  const config = new Config();

  const applyOptions: interfaces.ApplyOptions = {
    config,
    userConfig,
    cwd,
    env,
    browsers: getBrowsersList({ targets: userConfig.targets }),
    staticPathPrefix,
  };

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
    cacheDirectory: cache.cacheDirectory || resolveFile(cwd, '.cache'),
    buildDependencies: { config: cache.buildDependencies || []},
  });

  // entry
  Object.keys(entry).forEach((key) => {
    const entry = config.entry(key);
    entry.add(entry[key]);
  });

  // stats、mode、bail、devtool、profile
  config.profile(true);
  config.stats('none');
  config.mode(options.env);
  config.bail(!isDev);
  config.devtool(userConfig.devtool === false || userConfig.devtool ? userConfig.devtool : isDev ? DEFAULT_DEV_DEVTOOL : DEFAULT_BUILD_DEVTOOL);

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

  // output
  const outputPath = path.resolve(
    cwd,
    userConfig.outputPath || DEFAULT_OUTPUT_PATH
  );
  config.output
    .path(outputPath)
    .filename(isDev ? '[name].js' : '[name].[contenthash].js')
    .chunkFilename(isDev ? '[name].async.js' : '[name].[contenthash].async.js')
    .publicPath(userConfig.publicPath)
    .pathinfo(true)
    .set('assetModuleFilename', `${staticPathPrefix}[name].[hash][ext]`)
    .set('hashFunction', 'xxhash64');

  // externals
  config.externals(userConfig.externals || []);

  // target
  config.target([
    'web',
    'es5',
  ]);

  // experiments
  config.experiments({ topLevelAwait: true });

  definePlugin({
    ...applyOptions,
    userEnv,
  });
  ignorePlugin(applyOptions);
  htmlPlugin(applyOptions);
  speedMeasurePlugin(applyOptions);
  progressPlugin(applyOptions);
  forkTsCheckerPlugin(applyOptions);
  preloadPlugin(applyOptions);
  miniCssExtractPlugin(applyOptions);
  bundleAnalyzerPlugin(applyOptions);
  copyPlugin(applyOptions);
  manifestPlugin(applyOptions);
  harmonyLinkingErrorPlugin(applyOptions);
  unusedPlugin(applyOptions);

  // chain webpack
  if (chainWebpack) {
    await chainWebpack(config, {
      env,
      webpack,
    });
  }
  if (userConfig.chainWebpack) {
    await userConfig.chainWebpack(config, {
      env,
      webpack,
    });
  }

  let webpackConfig = config.toConfig();

  // modify Config
  if (modifyWebpackConfig) {
    webpackConfig = await modifyWebpackConfig(webpackConfig, {
      env,
      webpack,
    });
  }

  return webpackConfig;
}
