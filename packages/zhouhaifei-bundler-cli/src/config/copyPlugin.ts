import fs from 'node:fs';
import path from 'node:path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import type { ApplyOptions } from '../types';

export function copyPlugin({ config, userConfig: { copy, publicDir }, cwd, isDevelopment }: ApplyOptions) {
  const copyPatterns = [];
  publicDir = path.resolve(cwd, publicDir);
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

  if (!isDevelopment && copyPatterns.length) {
    config.plugin('copy-webpack-plugin').use(CopyWebpackPlugin, [{ patterns: copyPatterns }]);
  }
}
