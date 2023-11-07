import { getBrowsersList } from '../utils/getBrowsersList';
import { interfaces } from '../types';
import { generateBabelConfig } from '@zhouhaifei/babel-preset';
import webpack from 'webpack';

export function javascriptRule({
  config,
  userConfig: {
    babelPluginImport,
    babelExtraPreset,
    babelExtraPlugins,
    babelPresetEnv,
    babelPresetReact,
    babelPresetTypeScript,
    babelPluginTransformRuntime,
    babelPluginDecorators,
    transpiler,
    reactRefresh,
    babelLoaderOptions,
    esbuildLoaderOptions,
    threadLoaderOptions,
    targets,
  },
  srcDir,
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
        ...esbuildLoaderOptions,
      });

    config.plugin('react-provide-plugin')
      .use(webpack.ProvidePlugin, [{ React: 'react' }]);
  } else if (transpiler === interfaces.Transpiler.babel) {
    const {
      presets,
      plugins,
    } = generateBabelConfig({
      babelPluginImport,
      babelExtraPreset,
      babelExtraPlugins,
      babelPresetEnv,
      babelPresetReact,
      babelPresetTypeScript,
      babelPluginTransformRuntime,
      babelPluginDecorators,
    });

    if (threadLoaderOptions) {
      rule.use('thread-loader')
        .loader(require.resolve('thread-loader'))
        .options({
          // additional node.js arguments
          workerNodeArgs: ['--max-old-space-size=1024'],
        });
    }

    rule.use('babel-loader')
      .loader(require.resolve('babel-loader'))
      .options({
        sourceType: 'unambiguous', // 自动处理es和js模块
        babelrc: false,
        configFile: false,
        cacheDirectory: true,
        browserslistConfigFile: false,
        targets: getBrowsersList(targets),
        ...babelLoaderOptions,
        presets,
        plugins: plugins.concat(reactRefresh ? [require.resolve('react-refresh/babel')] : []),
      });
  }
}
