import { ModuleScopePlugin } from '../react-dev-utils/moduleScopePlugin';
import { moduleFileExtensions } from './paths';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import CompressionPlugin from 'compression-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import PreloadWebpackPlugin from 'preload-webpack-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { merge } from 'webpack-merge';
import WebpackBar from 'webpackbar';
import WorkboxWebpackPlugin from 'workbox-webpack-plugin';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';
import { getClientEnvironment } from './env.js';
import { paths } from './paths.js';
import { utils } from './utils.js';
import SpeedMeasurePlugin from 'speed-measure-webpack-plugin';
import { output } from './output';
import { optimization } from './optimization';
import { jsAndTsConfig } from './jsAndTsConfig';
import { styleConfig } from './style';
import { staticResource } from './staticResource';

function createEnvironmentHash(env) {
  const hash = crypto.createHash('md5');
  hash.update(JSON.stringify(env));

  return hash.digest('hex');
}

const env = getClientEnvironment(utils.publicUrlOrPath);
const useTypeScript = fs.existsSync(paths.appTsConfig);

export function webpackConfig() {
  const initConfig = {
    externals: {
      lodash: {
        commonjs: 'lodash',
        commonjs2: 'lodash',
        amd: 'lodash',
        root: '_',
      },
      qs: {
        commonjs: 'qs',
        commonjs2: 'qs',
        amd: 'qs',
        root: 'Qs',
      },
      axios: {
        commonjs: 'axios',
        commonjs2: 'axios',
        amd: 'axios',
        root: 'axios',
      },
      react: {
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'react',
        root: 'React',
      },
      'react-dom': {
        commonjs: 'react-dom',
        commonjs2: 'react-dom',
        amd: 'react-dom',
        root: 'ReactDOM',
      },
      moment: {
        commonjs: 'moment',
        commonjs2: 'moment',
        amd: 'moment',
        root: 'moment',
      },
    },
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
      buildDependencies: { config: [__filename]},
    },

    mode: utils.isProduction ? 'production' : utils.isDevelopment && 'development',

    // Stop compilation early in production
    bail: utils.isProduction,
    devtool: utils.sourceMap,
    entry: { app: paths.appIndexJs },
    output,
    optimization,
    resolve: {
      modules: [
        'node_modules',
        paths.appSrc,
      ],

      extensions: moduleFileExtensions,
      plugins: [new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson])],
    },
    module: {
      strictExportPresence: true,
      rules: [
        {
          oneOf: [
            ...jsAndTsConfig,
            ...styleConfig,
            ...staticResource,
          ],
        },
      ].filter(Boolean),
    },
    plugins: [
      new SpeedMeasurePlugin(),
      new webpack.DefinePlugin(env.stringified),

      // eslint
      utils.allowEslint && new ESLintPlugin({
        threads: true,
        fix: false,
        formatter: 'stylish',
        quiet: true,
        extensions: [
          'js',
          'jsx',
          'ts',
          'tsx',
        ],
      }),

      new HtmlWebpackPlugin({
        inject: true,
        cache: false,
        publicPath: utils.publicUrlOrPath,
        template: paths.appIndexHtml,
        minify: utils.isProduction ? {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        } : {},
      }),

      // TypeScript type checking
      useTypeScript && utils.checkTs && new ForkTsCheckerWebpackPlugin({ typescript: { configFile: paths.appTsConfig }}),

      // preload
      utils.isProduction && new PreloadWebpackPlugin({ rel: 'prefetch' }),

      // zip css with content hash
      utils.isProduction && new MiniCssExtractPlugin({
        filename: `${utils.resourceName.css}/[name].[contenthash].css`,
        chunkFilename: `${utils.resourceName.css}/[name].[contenthash].css`,
      }),

      new WebpackBar({ profile: true }),
      utils.isProduction && utils.isAnalyze && new BundleAnalyzerPlugin({
        openAnalyzer: false,
        analyzerPort: utils.port + 1,
      }),

      // gzip压缩
      utils.isCompress && utils.isProduction && new CompressionPlugin({
        filename: '[path][base].gz',
        test: /\.(js|css|html|svg)$/,
        algorithm: 'gzip',
        compressionOptions: { level: 9 },
      }),

      // br压缩
      utils.isCompress && utils.isProduction && parseInt(process.versions.node, 10) >= 12 && new CompressionPlugin({
        filename: '[path][base].br',
        algorithm: 'brotliCompress',
        test: /\.(js|css|html|svg)$/,
        compressionOptions: { level: 11 },
        threshold: 0,
        minRatio: 1,
        deleteOriginalAssets: false,
      }),

      // 复制依赖文件
      utils.isProduction && new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(paths.appPublic),
            filter: (filename) => !filename.endsWith('.html'),
            to: path.resolve(paths.appDist),
          },
        ],
      }),

      // 是否开启serviceWorker
      utils.isProduction && utils.isStartServiceWorker && new WorkboxWebpackPlugin.GenerateSW({
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
}
