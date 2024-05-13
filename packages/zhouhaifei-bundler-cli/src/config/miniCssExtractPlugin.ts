import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { ApplyOptions } from '../types';

export function miniCssExtractPlugin({ config, isDevelopment }: ApplyOptions) {
  if (!isDevelopment) {
    config.plugin('mini-css-extract-plugin').use(MiniCssExtractPlugin, [
      {
        filename: '[name].[contenthash].css',
        chunkFilename: '[name].[contenthash].chunk.css',
        ignoreOrder: true,
      },
    ]);
  }
}
