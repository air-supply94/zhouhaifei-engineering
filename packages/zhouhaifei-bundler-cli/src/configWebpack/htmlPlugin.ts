import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import type { WebpackApplyOptions } from '../types';

export function htmlPlugin({
  config,
  isProduction,
  userConfig: {
    htmlOption,
    publicPath,
    publicDir,
  },
}: WebpackApplyOptions) {
  if (htmlOption !== false) {
    const initOptions = {
      inject: true,
      cache: false,
      publicPath,
      template: path.resolve(publicDir, 'index.html'),
      minify: isProduction ? {
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
    };

    config
      .plugin('html-webpack-plugin')
      .use(HtmlWebpackPlugin, [
        {
          ...initOptions,
          htmlOption,
        },
      ]);
  }
}
