import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { interfaces } from '../types';

export function miniCssExtractPlugin({
  config,
  env,
  isProduction,
}: interfaces.ApplyOptions) {
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
