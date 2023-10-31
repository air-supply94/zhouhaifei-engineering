import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { interfaces } from '../types';

export function miniCssExtractPlugin({
  config,
  env,
}: interfaces.ApplyOptions) {
  if (env === interfaces.Env.production) {
    config
      .plugin('mini-css-extract-plugin')
      .use(MiniCssExtractPlugin, [
        {
          filename: '[name].[contenthash].css',
          chunkFilename: '[name].[contenthash].chunk.css',
        },
      ]);
  }
}
