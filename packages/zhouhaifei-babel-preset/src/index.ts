import fs from 'fs';
import path from 'path';

export interface GenerateBabelConfigOptions {
  extraPreset?: any;
  extraPlugins?: any;
  presetEnv?: Record<string, any>;
  presetReact?: false | Record<string, any>;
  presetTypeScript?: Record<string, any>;
  pluginTransformRuntime?: false | Record<string, any>;
  pluginDecorators?: false | Record<string, any>;
  classProperties?: Record<string, any>;
}

export function generateBabelConfig({
  extraPreset,
  extraPlugins,
  presetEnv,
  presetReact,
  presetTypeScript,
  pluginTransformRuntime,
  pluginDecorators,
  classProperties,
}: GenerateBabelConfigOptions = {}) {
  const packageJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf8')
    .toString());
  const coreJsVersion = packageJson.dependencies['core-js'];
  const runtimeVersion = packageJson.dependencies['@babel/runtime'];

  return {
    presets: [
      // preset-env
      [
        require.resolve('@babel/preset-env'),
        {
          bugfixes: true,
          loose: true,

          // 保留 es modules 语法,交给 webpack 处理
          modules: false,
          debug: false,
          useBuiltIns: 'usage',
          corejs: {
            version: coreJsVersion,
            proposals: true,
          },
          ignoreBrowserslistConfig: true,
          ...presetEnv,
        },
      ],

      // 转换jsx语法
      presetReact !== false && [
        require.resolve('@babel/preset-react'),
        {
          runtime: 'automatic',
          development: process.env.NODE_ENV === 'development',
          ...presetReact,
        },
      ],

      // 转换ts语法
      [
        require.resolve('@babel/preset-typescript'),
        {
          allowNamespaces: true,
          allowDeclareFields: true,
          onlyRemoveTypeImports: false,
          optimizeConstEnums: true,
          ...presetTypeScript,
        },
      ],
    ].concat(extraPreset)
      .filter(Boolean),
    plugins: [
      // 支持装饰器语法
      pluginDecorators !== false && [
        require.resolve('@babel/plugin-proposal-decorators'),
        {
          version: 'legacy',
          ...pluginDecorators,
        },
      ],

      // preset-env内置了下面插件,webpack打包不需要下面插件
      // vite dev使用esbuild打包,不需要preset和transform-runtime,需要下面插件
      classProperties && [
        require.resolve('@babel/plugin-proposal-class-properties'),
        {
          loose: true,
          ...classProperties,
        },
      ],
      classProperties && [
        require.resolve('@babel/plugin-proposal-private-methods'),
        {
          loose: true,
          ...classProperties,
        },
      ],
      classProperties && [
        require.resolve('@babel/plugin-proposal-private-property-in-object'),
        {
          loose: true,
          ...classProperties,
        },
      ],

      // do-expressions
      require.resolve('@babel/plugin-proposal-do-expressions'),

      // duplicate-named-capturing-groups-regex
      require.resolve('@babel/plugin-proposal-duplicate-named-capturing-groups-regex'),

      // 支持 export v from 'mod'语法
      require.resolve('@babel/plugin-proposal-export-default-from'),

      // function-bind
      require.resolve('@babel/plugin-proposal-function-bind'),

      // function-sent
      require.resolve('@babel/plugin-proposal-function-sent'),

      // partial-application
      require.resolve('@babel/plugin-proposal-partial-application'),

      // pipeline-operator
      [
        require.resolve('@babel/plugin-proposal-pipeline-operator'),
        { proposal: 'minimal' },
      ],

      // throw-expressions
      require.resolve('@babel/plugin-proposal-throw-expressions'),

      // record-and-tuple
      require.resolve('@babel/plugin-proposal-record-and-tuple'),

      // transform-runtime
      pluginTransformRuntime !== false && [
        require.resolve('@babel/plugin-transform-runtime'),
        {
          helpers: true,
          regenerator: true,
          absoluteRuntime: path.dirname(require.resolve('../package.json')),
          version: runtimeVersion,
          ...pluginTransformRuntime,
        },
      ],
    ].concat(extraPlugins)
      .filter(Boolean),
  };
}
