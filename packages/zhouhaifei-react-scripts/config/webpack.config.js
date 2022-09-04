'use strict';
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const compressionPlugin = require('compression-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const webpack = require('webpack');
const ModuleScopePlugin = require('../react-dev-utils/moduleScopePlugin');
const bundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { merge } = require('webpack-merge');
const webpackBar = require('webpackbar');
const workboxWebpackPlugin = require('workbox-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const getClientEnvironment = require('./env');
const modules = require('./modules');
const paths = require('./paths');
const utils = require('./utils');

function createEnvironmentHash(env) {
  const hash = crypto.createHash('md5');
  hash.update(JSON.stringify(env));

  return hash.digest('hex');
}

const env = getClientEnvironment(utils.publicUrlOrPath);
const useTypeScript = fs.existsSync(paths.appTsConfig);
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

module.exports = function() {
  const initConfig = {
    profile: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: false,
      ignored: /node_modules/,
    },
    cache: {
      type: 'filesystem',
      version: createEnvironmentHash(env.raw),
      cacheDirectory: paths.appWebpackCache,
      store: 'pack',
      buildDependencies: {
        defaultWebpack: ['webpack/lib/'],
        config: [__filename],
        tsconfig: [
          paths.appTsConfig,
          paths.appJsConfig,
        ].filter((f) => fs.existsSync(f)),
      },
    },

    mode: utils.isProduction ? 'production' : utils.isDevelopment && 'development',

    // Stop compilation early in production
    bail: utils.isProduction,
    devtool: utils.sourceMap,
    entry: require('./entry'),
    output: require('./output'),
    optimization: require('./optimization'),
    resolve: {
      modules: [
        'node_modules',
        paths.appSrc,
      ],

      extensions: paths.moduleFileExtensions.map((ext) => `.${ext}`)
        .filter((ext) => useTypeScript || !ext.includes('ts')),
      alias: modules.webpackAliases,
      plugins: [
        /*
         * Prevents users from importing files from outside of src/ (or node_modules/).
         * This often causes confusion because we only process files within src/ with babel.
         * To fix this, we prevent you from importing files out of src/ -- if you'd like to,
         * please link the files into your node_modules/ and let module-resolution kick in.
         * Make sure your source files are compiled, as they will not be processed in any way.
         */
        new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
      ],
    },
    module: {
      strictExportPresence: true,
      rules: [
        {
          oneOf: [
            ...require('./jsAndTsConfig'),
            ...require('./style'),
            ...require('./staticResource'),
          ],
        },
      ].filter(Boolean),
    },
    plugins: [
      new SpeedMeasurePlugin(),
      new webpack.DefinePlugin(env.stringified),

      // eslint
      utils.allowEslint && new ESLintPlugin({
        fix: false,
        formatter: 'stylish',
        quiet: true,
        eslintPath: require.resolve('eslint'),
        extensions: [
          'js',
          'jsx',
          'ts',
          'tsx',
        ],
      }),

      new HtmlWebpackPlugin(require('./htmlWebpackPlugin')),

      // TypeScript type checking
      useTypeScript && utils.checkTs && new ForkTsCheckerWebpackPlugin({ typescript: { configFile: paths.appTsConfig }}),

      // preload
      utils.isProduction && new PreloadWebpackPlugin({ rel: 'prefetch' }),

      // zip css with content hash
      utils.isProduction && new MiniCssExtractPlugin({
        filename: `${utils.resourceName.css}/[name].[contenthash].css`,
        chunkFilename: `${utils.resourceName.css}/[name].[contenthash].css`,
      }),

      new webpackBar({ profile: true }),
      utils.isProduction && utils.isAnalyze && new bundleAnalyzerPlugin({
        openAnalyzer: false,
        analyzerPort: utils.port + 1,
      }),

      // gzip压缩
      utils.isCompress && utils.isProduction && new compressionPlugin({
        filename: '[path][base].gz',
        test: /\.(js|css|html|svg)$/,
        algorithm: 'gzip',
        compressionOptions: {
          level: 9,
          threshold: 0,
          minRatio: 1,
        },
      }),

      // br压缩
      utils.isCompress && utils.isProduction && parseInt(process.versions.node, 10) >= 12 && new compressionPlugin({
        filename: '[path][base].br',
        algorithm: 'brotliCompress',
        test: /\.(js|css|html|svg)$/,
        compressionOptions: { level: 11 },
        threshold: 0,
        minRatio: 1,
        deleteOriginalAssets: false,
      }),

      // 复制依赖文件
      utils.isProduction && new copyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(paths.appPublic),
            to: path.resolve(paths.appDist),
          },
        ],
      }),

      // 是否开启serviceWorker
      utils.isProduction && utils.isStartServiceWorker && new workboxWebpackPlugin.GenerateSW({
        clientsClaim: true,
        skipWaiting: true,
        exclude: [
          /\.map$/,
          /asset-manifest\.json$/,
        ],
      }),

      // manifest
      utils.isProduction && new WebpackManifestPlugin({
        fileName: 'asset-manifest.json',
        publicPath: utils.publicUrlOrPath,
        generate: (seed, files, entrypoints) => {
          const manifestFiles = files.reduce((manifest, file) => {
            manifest[file.name] = file.path;
            return manifest;
          }, seed);
          const entrypointFiles = entrypoints.app.filter((fileName) => !fileName.endsWith('.map'));

          return {
            files: manifestFiles,
            entrypoints: entrypointFiles,
          };
        },
      }),

    ].filter(Boolean),

    performance: {
      // 设置所有产物体积阈值
      maxAssetSize: 180 * 1024,

      // 设置 entry 产物体积阈值
      maxEntrypointSize: 250 * 1024,

      // 报错方式，支持 `error` | `warning` | false
      hints: 'warning',

      // 过滤需要监控的文件类型
      assetFilter(assetFilename) {
        return assetFilename.endsWith('.js');
      },
    },
  };

  return merge(initConfig, utils.otherConfig);
};
