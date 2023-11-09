import type { WebpackApplyOptions } from '../types';
import fs from 'fs';
import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export function copyPlugin({
  config,
  userConfig: { copy },
  cwd,
  isProduction,
  publicDir,
}: WebpackApplyOptions) {
  const copyPatterns = [];

  if (fs.existsSync(publicDir) && fs.readdirSync(publicDir).length) {
    copyPatterns.push({
      from: publicDir,
      filter: (filename) => !filename.endsWith('.html'),
      info: { minimized: true },
    });
  }

  if (copy) {
    copy.forEach((pattern) => {
      if (typeof pattern === 'string') {
        copyPatterns.push({
          from: path.resolve(cwd, pattern),
          info: { minimized: true },
        });
      } else {
        copyPatterns.push({
          from: path.resolve(cwd, pattern.from),
          to: path.resolve(cwd, pattern.to),
          info: { minimized: true },
        });
      }
    });
  }

  if (isProduction && copyPatterns.length) {
    config
      .plugin('copy-webpack-plugin')
      .use(CopyWebpackPlugin, [{ patterns: copyPatterns }]);
  }
}
