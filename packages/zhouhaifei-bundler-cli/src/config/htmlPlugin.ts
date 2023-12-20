import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import type { ApplyOptions } from '../types';

export function htmlPlugin({
  config,
  isDevelopment,
  userConfig: {
    htmlOption,
    publicPath,
    publicDir,
  },
  cwd,
}: ApplyOptions) {
  if (htmlOption !== false) {
    const initOptions = {
      inject: true,
      cache: false,
      publicPath,
      template: path.resolve(cwd, `${publicDir}/index.html`),
      minify: !isDevelopment ? {
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
