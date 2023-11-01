import { interfaces } from '../types';
import path from 'path';

export function javascriptRule({
  config,
  userConfig,
  env,
  cwd,
  isDevelopment,
}: interfaces.ApplyOptions) {
  const rule = config
    .module
    .rule('javascript')
    .test(/\.(js|mjs|jsx|ts|tsx)$/)
    .include
    .add(path.resolve(cwd, 'src'))
    .end();

  if (isDevelopment) {
    rule.use('esbuild-loader')
      .loader(require.resolve('esbuild-loader'))
      .options({
        loader: 'tsx',
        target: 'es2015',
      });
  } else {
    rule.use('thread-loader')
      .loader(require.resolve('thread-loader'))
      .options({
        // additional node.js arguments
        workerNodeArgs: ['--max-old-space-size=1024'],
      });
    rule.use('babel-loader')
      .loader(require.resolve('babel-loader'))
      .options({
        sourceType: 'unambiguous', // 自动处理es和js模块
        cacheDirectory: true,

        // See #6846 for context on why cacheCompression is disabled
        cacheCompression: false,
        compact: env === interfaces.Env.production,
      });
  }
}
