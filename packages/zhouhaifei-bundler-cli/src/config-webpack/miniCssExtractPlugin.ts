import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { WebpackApplyOptions } from '../types';

export function miniCssExtractPlugin({
  config,
  isProduction,
}: WebpackApplyOptions) {
  if (isProduction) {
    config
      .plugin('mini-css-extract-plugin')
      .use(MiniCssExtractPlugin, [
        {
          filename: '[name].[contenthash].css',
          chunkFilename: '[name].[contenthash].chunk.css',
          ignoreOrder: true,
        },
      ]);
  }
}
