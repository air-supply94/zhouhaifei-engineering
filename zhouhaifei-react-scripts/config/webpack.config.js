'use strict';

const getClientEnvironment = require('./env');
const fs = require('fs');
const path = require('path');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const compressionPlugin = require('compression-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const copyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('react-dev-utils/ForkTsCheckerWebpackPlugin');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const webpack = require('webpack');
const bundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { merge } = require('webpack-merge');
const webpackBar = require('webpackbar');
const modules = require('./modules');
const paths = require('./paths');
const utils = require('./utils');

const shouldUseSourceMap = utils.shouldUseSourceMap;

const useTypeScript = fs.existsSync(paths.appTsConfig);

module.exports = function() {
  const initConfig = {
    mode: utils.isProduction ? 'production' : utils.isDevelopment && 'development',

    // Stop compilation early in production
    bail: utils.isProduction,
    devtool: utils.isProduction
      ? shouldUseSourceMap
        ? 'source-map'
        : false
      : utils.isDevelopment && 'cheap-module-source-map',
    entry: require('./entry'),
    output: require('./output'),
    optimization: require('./optimization'),
    resolve: {
      modules: [
        'node_modules',
        paths.appNodeModules,
      ],

      extensions: paths.moduleFileExtensions.map((ext) => `.${ext}`).filter((ext) => useTypeScript || !ext.includes('ts')),
      alias: {
        'react-native': 'react-native-web',

        ...(utils.isProductionProfile && {
          'react-dom$': 'react-dom/profiling',
          'scheduler/tracing': 'scheduler/tracing-profiling',
        }),
        ...(modules.webpackAliases || {}),
      },
      plugins: [
        /* Adds support for installing with Plug'n'Play, leading to faster installs and adding
           guards against forgotten dependencies and such. */
        PnpWebpackPlugin,

        /* Prevents users from importing files from outside of src/ (or node_modules/).
           This often causes confusion because we only process files within src/ with babel.
           To fix this, we prevent you from importing files out of src/ -- if you'd like to,
           please link the files into your node_modules/ and let module-resolution kick in.
           Make sure your source files are compiled, as they will not be processed in any way. */
        new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
      ],
    },
    resolveLoader: {
      plugins: [
        /* Also related to Plug'n'Play, but this time it tells webpack to load its loaders
           from the current package. */
        PnpWebpackPlugin.moduleLoader(module),
      ],
    },
    module: {
      strictExportPresence: true,
      rules: [
        { parser: { requireEnsure: false }},

        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          enforce: 'pre',
          use: [
            {
              options: {
                cache: true,
                fix: true,
                formatter: 'stylish',
                eslintPath: require.resolve('eslint'),
                resolvePluginsRelativeTo: __dirname,
              },
              loader: require.resolve('eslint-loader'),
            },
          ],
          include: paths.appPath,
          exclude: utils.exclude,
        },
        {
          oneOf: [
            {
              test: /\.(js|mjs|jsx|ts|tsx)$/,
              include: paths.appSrc,
              exclude: utils.exclude,
              use: [
                {
                  loader: require.resolve('thread-loader'),
                  options: {
                    /* the number of spawned workers, defaults to (number of cpus - 1) or
                       fallback to 1 when require('os').cpus() is undefined */
                    workers: require('os').cpus().length,

                    /* number of jobs a worker processes in parallel
                       defaults to 20 */
                    workerParallelJobs: 50,

                    // additional node.js arguments
                    workerNodeArgs: ['--max-old-space-size=1024'],

                    /* Allow to respawn a dead worker pool
                       respawning slows down the entire compilation
                       and should be set to false for development */
                    poolRespawn: false,

                    /* timeout for killing the worker processes when idle
                       defaults to 500 (ms)
                       can be set to Infinity for watching builds to keep workers alive */
                    poolTimeout: 2000,

                    /* number of jobs the poll distributes to the workers
                       defaults to 200
                       decrease of less efficient but more fair distribution */
                    poolParallelJobs: 50,

                    /* name of the pool
                       can be used to create different pools with elsewise identical options */
                    name: 'my-pool',
                  },
                },
                {
                  loader: require.resolve('babel-loader'),
                  options: {
                    extends: path.resolve(__dirname, 'babel.config.js'),
                    cacheDirectory: true,

                    // See #6846 for context on why cacheCompression is disabled
                    cacheCompression: false,
                    compact: utils.isProduction,
                  },
                },
              ],
            },

            ...require('./style'),
            ...require('./staticResource'),
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin(require('./htmlWebpackPlugin')),
      new ModuleNotFoundPlugin(paths.appPath),
      new webpack.DefinePlugin(getClientEnvironment(paths.publicUrlOrPath.slice(0, -1)).stringified),
      utils.isDevelopment && new CaseSensitivePathsPlugin(),
      utils.isDevelopment && new WatchMissingNodeModulesPlugin(paths.appNodeModules),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

      utils.isProduction && new MiniCssExtractPlugin({
        filename: `${utils.resourceName.css}/[name].[contenthash].css`,
        chunkFilename: `${utils.resourceName.css}/[name].[contenthash].css`,
      }),

      new webpackBar({ profile: false }),
      utils.isProduction && new bundleAnalyzerPlugin({
        openAnalyzer: false,
        analyzerHost: utils.host,
        analyzerPort: utils.port + 1,
      }),

      // gzip压缩
      utils.isProduction && new compressionPlugin({
        test: /\.(js|css|html|svg)$/,
        cache: false,
        algorithm: 'gzip',
        compressionOptions: {
          level: 9,
          threshold: 0,
          minRatio: 0.8,
        },
      }),

      // br压缩
      utils.isProduction && parseInt(process.versions.node, 10) >= 12 && new compressionPlugin({
        filename: '[path].br[query]',
        algorithm: 'brotliCompress',
        test: /\.(js|css|html|svg)$/,
        compressionOptions: { level: 11 },
        threshold: 0,
        minRatio: 0.8,
        deleteOriginalAssets: false,
      }),

      // 复制依赖文件
      utils.isProduction && new copyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(paths.appPublic, 'assets'),
            to: path.resolve(paths.appDist, 'assets'),
          },
        ],
      }),

      // 清除原先打包内容
      utils.isProduction && new cleanWebpackPlugin(),

      utils.isDevelopment && new webpack.HotModuleReplacementPlugin(),

      // TypeScript type checking
      useTypeScript && new ForkTsCheckerWebpackPlugin({
        async: utils.isDevelopment,
        useTypescriptIncrementalApi: true,
        checkSyntacticErrors: true,
        tsconfig: paths.appTsConfig,
        reportFiles: [
          '**',
          '!**/__tests__/**',
          '!**/?(*.)(spec|test).*',
          '!**/src/setupProxy.*',
        ],
        watch: paths.appSrc,
        silent: true,
      }),

    ].filter(Boolean),

    /* Some libraries import Node modules but don't use them in the browser.
       Tell webpack to provide empty mocks for them so importing them works. */
    node: {
      module: 'empty',
      dgram: 'empty',
      dns: 'mock',
      fs: 'empty',
      http2: 'empty',
      net: 'empty',
      tls: 'empty',
      child_process: 'empty',
    },

    /* Turn off performance processing because we utilize
       our own hints via the FileSizeReporter */
    performance: false,
  };

  const outConfig = path.resolve(paths.appPath, 'webpack.config.js');
  return fs.existsSync(outConfig) ? merge(initConfig, require(outConfig)(utils)) : initConfig;
};
