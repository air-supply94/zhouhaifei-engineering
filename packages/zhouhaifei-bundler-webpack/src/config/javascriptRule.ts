import type { interfaces } from '../types';
import { generateBabelConfig } from '@zhouhaifei/babel-preset';

export function javascriptRule({
  config,
  userConfig,
  isDevelopment,
  srcDir,
  browsers,
}: interfaces.ApplyOptions) {
  const rule = config
    .module
    .rule('javascript')
    .test(/\.(js|mjs|jsx|ts|tsx)$/)
    .include
    .add(srcDir)
    .end();

  if (isDevelopment) {
    rule.use('esbuild-loader')
      .loader(require.resolve('esbuild-loader'))
      .options({
        loader: 'tsx',
        target: 'es2015',
      });
  } else {
    const {
      presets,
      plugins,
    } = generateBabelConfig({});

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
        babelrc: false,
        configFile: false,
        cacheDirectory: true,
        browserslistConfigFile: false,
        targets: browsers,
        presets,
        plugins,
      });
  }
}
