import type { Configuration } from 'webpack';
import Config from 'webpack-5-chain';
import crypto from 'crypto';
import { DEFAULT_BROWSER_TARGETS, DEFAULT_BUILD_DEVTOOL, DEFAULT_DEV_DEVTOOL, DEFAULT_OUTPUT_PATH, version } from '../constants';
import path from 'path';
import webpack from 'webpack';
import { CodeSplit, CSSMinifier, Env, JSMinifier, Transpiler } from '../types';
import type { WebpackConfigOptions, WebpackApplyOptions } from '../types';
import { getPublicUrl } from '../utils/getPublicUrl';
import { assetRule } from './assetRule';
import { bundleAnalyzerPlugin } from './bundleAnalyzerPlugin';
import { caseSensitivePathsPlugin } from './caseSensitivePathsPlugin';
import { compressPlugin } from './compressPlugin';
import { copyPlugin } from './copyPlugin';
import { cssRule } from './cssRule';
import { forkTsCheckerPlugin } from './forkTsCheckerPlugin';
import { javascriptRule } from './javascriptRule';
import { manifestPlugin } from './manifestPlugin';
import { miniCssExtractPlugin } from './miniCssExtractPlugin';
import { optimization } from './optimization';
import { preloadPlugin } from './preloadPlugin';
import { definePlugin } from './definePlugin';
import { reactRefreshPlugin } from './reactRefreshPlugin';
import { speedMeasurePlugin } from './speedMeasurePlugin';
import { progressPlugin } from './progressPlugin';
import { ignorePlugin } from './ignorePlugin';
import { svgRule } from './svgRule';
import { unusedPlugin } from './unusedPlugin ';
import { htmlPlugin } from './htmlPlugin';

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
    staticPathPrefix = 'static/',
    userEnv = {},
    cache = {},
    chainWebpack,
    modifyWebpackConfig,
  } = options;
  const nodeModules = /node_modules/;
  const isDev = env === Env.development;
  const config = new Config();

  userConfig.codeSplitting ||= CodeSplit.granularChunks;
  userConfig.transpiler ||= Transpiler.esbuild;
  userConfig.jsMinifier ||= JSMinifier.esbuild;
  userConfig.cssMinifier ||= CSSMinifier.esbuild;
  userConfig.targets ||= DEFAULT_BROWSER_TARGETS;
  userConfig.inlineLimit ||= 1024 * 8;
  userConfig.publicPath = getPublicUrl(userConfig.publicPath);

  const applyOptions: WebpackApplyOptions = {
    config,
    userConfig,
    cwd,
    env,
    staticPathPrefix,
    isDevelopment: env === Env.development,
    isProduction: env === Env.production,
    srcDir: path.resolve(cwd, 'src'),
    publicDir: path.resolve(cwd, 'public'),
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
    cacheDirectory: cache.cacheDirectory || path.resolve(cwd, '.cache'),
    buildDependencies: { config: cache.buildDependencies || []},
  });

  // entry
  Object.keys(entry)
    .forEach((key) => {
      config
        .entry(key)
        .add(entry[key])
        .end();
    });

  // stats、mode、bail、devtool、profile
  config.stats('none');
  config.mode(options.env);
  config.bail(!isDev);
  config.devtool(userConfig.devtool === false || userConfig.devtool ? userConfig.devtool : isDev ? DEFAULT_DEV_DEVTOOL : DEFAULT_BUILD_DEVTOOL);

  // resolve
  config.resolve
    .symlinks(true)
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
    .clean(true)
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

  // module
  assetRule(applyOptions);
  svgRule(applyOptions);
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
  optimization(applyOptions);

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
