const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const utils = require('./utils');

module.exports = {
  usedExports: true,
  sideEffects: true,
  concatenateModules: true,
  moduleIds: 'deterministic',
  runtimeChunk: 'single',
  minimize: utils.isProduction,
  minimizer: utils.isProduction ? [
    new TerserPlugin({
      terserOptions: {
        parse: { ecma: 8 },
        compress: {
          ecma: 5,
          warnings: false,
          comparisons: false,
          inline: 2,
        },
        mangle: { safari10: true },

        // Added for profiling in devtools
        keep_classnames: false,
        keep_fnames: false,
        output: {
          ecma: 5,
          comments: false,
          ascii_only: true,
        },
      },
    }),

    new CssMinimizerPlugin({
      minimizerOptions: {
        preset: [
          'default',
          { discardComments: { removeAll: true }},
        ],
      },
    }),
  ] : [],

  splitChunks: {
    chunks: 'all',
    minSize: utils.splitChunkMinSize,
    maxSize: utils.splitChunkMinSize * 8,
    minChunks: 1,
    maxAsyncRequests: 30,
    maxInitialRequests: 30,
    enforceSizeThreshold: 50 * 1000,
    cacheGroups: {},
  },
};
