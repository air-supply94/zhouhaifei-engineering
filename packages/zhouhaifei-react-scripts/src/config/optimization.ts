import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { utils } from './utils';
import ESBuildPlugin from 'esbuild-webpack-plugin';

export const optimization: any = {
  moduleIds: 'deterministic',
  runtimeChunk: 'single',
  minimize: utils.isProduction,
  minimizer: utils.isProduction ? [
    utils.useEsBuild
      ? new ESBuildPlugin({
        loader: 'tsx',
        target: 'es2015',
        jsxFactory: 'React.createElement',
        jsxFragment: 'React.Fragment',
      })
      : new TerserPlugin({
        terserOptions: {
          parse: {
            // @ts-ignore
            ecma: 8,
          },
          compress: {
            ecma: 5,

            // @ts-ignore
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

            /*
             * Turned on because emoji and regex is not minified properly using default
             * https://github.com/facebook/create-react-app/issues/2488
             */
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

  splitChunks: utils.isProduction ? {
    chunks: 'all',
    minSize: utils.splitChunkMinSize,
    minChunks: 1,
    maxAsyncRequests: 30,
    maxInitialRequests: 30,
    enforceSizeThreshold: 50 * 1000,
    cacheGroups: {},
  } : false,
};
