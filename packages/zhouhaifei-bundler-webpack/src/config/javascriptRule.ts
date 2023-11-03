import { interfaces } from '../types';
import { generateBabelConfig } from '@zhouhaifei/babel-preset';

export function javascriptRule({
  config,
  userConfig: {
    extraPreset,
    extraPlugins,
    presetEnv,
    presetReact,
    presetTypeScript,
    pluginTransformRuntime,
    pluginDecorators,
    transpiler,
    reactRefresh,
    babelLoaderOptions,
  },
  srcDir,
  browsers,
}: interfaces.ApplyOptions) {
  const rule = config
    .module
    .rule('javascript')
    .test(/\.(js|mjs|jsx|ts|tsx)$/)
    .exclude
    .add(/node_modules/)
    .end()
    .include
    .add(srcDir)
    .end();

  if (transpiler === interfaces.Transpiler.esbuild) {
    rule.use('esbuild-loader')
      .loader(require.resolve('esbuild-loader'))
      .options({
        loader: 'tsx',
        target: 'es2015',
      });
  } else if (transpiler === interfaces.Transpiler.babel) {
    const {
      presets,
      plugins,
    } = generateBabelConfig({
      extraPreset,
      extraPlugins,
      presetEnv,
      presetReact,
      presetTypeScript,
      pluginTransformRuntime,
      pluginDecorators,
    });

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
        ...babelLoaderOptions,
        presets,
        plugins: plugins.concat(reactRefresh ? [require.resolve('react-refresh/babel')] : []),
      });
  }
}
