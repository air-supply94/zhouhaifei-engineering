import path from 'path';
import { paths } from './paths';
import { utils } from './utils';

export const output = {
  clean: true,
  libraryTarget: 'umd',
  path: utils.isProduction ? paths.appDist : utils.isDevelopment && paths.appPublic,
  pathinfo: false,
  filename: utils.isProduction
    ? `${utils.resourceName.js}/[name].[contenthash].js`
    : utils.isDevelopment && `${utils.resourceName.js}/[name].bundle.js`,

  // There are also additional JS chunk files if you use code splitting.
  chunkFilename: utils.isProduction
    ? `${utils.resourceName.js}/[name].[contenthash].js`
    : utils.isDevelopment && `${utils.resourceName.js}/[name].chunk.js`,
  publicPath: utils.publicUrlOrPath,

  // Point sourcemap entries to original disk location (format as URL on Windows)
  devtoolModuleFilenameTemplate: utils.isProduction
    ? (info) => path.relative(paths.appSrc, info.absoluteResourcePath).replace(/\\/g, '/')
    : utils.isDevelopment &&
    ((info) => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')),
};
