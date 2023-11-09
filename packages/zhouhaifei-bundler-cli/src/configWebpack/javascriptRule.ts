import type { WebpackApplyOptions } from '../types';
import { Transpiler } from '../types';
import { getBrowsersList } from '../utils';
import { generateBabelConfig } from '@zhouhaifei/babel-preset';
import webpack from 'webpack';

export function javascriptRule({
  config,
  userConfig: {
    antd,
    babelExtraPreset,
    babelExtraPlugins,
    babelPresetEnv,
    babelPresetReact,
    babelPresetTypeScript,
    babelPluginTransformRuntime,
    babelPluginDecorators,
    babelPluginStyledComponents,
    transpiler,
    reactRefresh,
    babelLoaderOptions,
    esbuildLoaderOptions,
    threadLoaderOptions,
    targets,
  },
  srcDir,
}: WebpackApplyOptions) {
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

  if (transpiler === Transpiler.esbuild) {
    rule.use('esbuild-loader')
      .loader(require.resolve('esbuild-loader'))
      .options({
        loader: 'tsx',
        target: 'es2015',
        ...esbuildLoaderOptions,
      });

    config.plugin('react-provide-plugin')
      .use(webpack.ProvidePlugin, [{ React: 'react' }]);
  } else if (transpiler === Transpiler.babel) {
    const {
      presets,
      plugins,
    } = generateBabelConfig({
      babelExtraPreset,
      babelExtraPlugins,
      babelPresetEnv,
      babelPresetReact,
      babelPresetTypeScript,
      babelPluginTransformRuntime,
      babelPluginDecorators,
      babelPluginStyledComponents,
    });

    if (threadLoaderOptions) {
      rule.use('thread-loader')
        .loader(require.resolve('thread-loader'))
        .options({
          // additional node.js arguments
          workerNodeArgs: ['--max-old-space-size=1024'],
          ...threadLoaderOptions,
        });
    }

    const extraBabelPlugins: any[] = [
      reactRefresh && require.resolve('react-refresh/babel'),

      // antd4x style import
      antd.import && [
        require.resolve('babel-plugin-import'),
        {
          libraryName: antd.libraryName,
          libraryDirectory: 'es',
          style: true,
        },
      ],
    ].filter(Boolean);

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
        plugins: plugins.concat(extraBabelPlugins),
      });
  }
}
