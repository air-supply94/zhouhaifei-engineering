import fs from 'fs';
import path from 'path';

export interface GenerateBabelConfigOptions {
  extraPreset?: any;
  extraPlugins?: any;
  presetEnv?: {
    targets: string | string[] | Record<string, string>;
    bugfixes?: boolean;
    spec?: boolean;
    loose?: boolean;
    modules?: 'amd' | 'umd' | 'systemjs' | 'commonjs' | 'cjs' | 'auto' | false;
    debug?: boolean;
    include?: Array<string | RegExp>;
    exclude?: Array<string | RegExp>;
    useBuiltIns?: 'usage' | 'entry' | false;
    corejs?: { version: string; proposals: boolean; };
    configPath?: string;
    ignoreBrowserslistConfig?: boolean;
    browserslistEnv?: string;
    shippedProposals?: boolean;
  };
  presetReact?: false | {
    runtime?: 'classic' | 'automatic';
    development?: boolean;
    throwIfNamespace?: boolean;
    pure?: boolean;
    importSource?: string;
    pragma?: string;
    pragmaFrag?: string;
  };
  presetTypeScript?: {
    isTSX?: boolean;
    jsxPragma?: string;
    jsxPragmaFrag?: string;
    allExtensions?: boolean;
    allowNamespaces?: boolean;
    allowDeclareFields?: boolean;
    disallowAmbiguousJSXLike?: boolean;
    onlyRemoveTypeImports?: boolean;
    optimizeConstEnums?: boolean;
    rewriteImportExtensions?: boolean;
  };
  pluginTransformRuntime?: false | {
    corejs?: false | 2 | 3 | { version: 2 | 3; proposals: boolean; };
    helpers?: boolean;
    regenerator?: boolean;
    absoluteRuntime?: string | boolean;
    version?: string;
  };
  pluginDecorators?: false | {
    version?: '2023-05' | '2023-01' | '2022-03' | '2021-12' | '2018-09' | 'legacy';
    decoratorsBeforeExport?: boolean;
  };
  classProperties?: { loose?: boolean; };
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
        } as GenerateBabelConfigOptions['presetEnv'],
      ],

      // 转换jsx语法
      presetReact !== false && [
        require.resolve('@babel/preset-react'),
        {
          runtime: 'automatic',
          development: process.env.NODE_ENV === 'development',
          ...presetReact,
        } as GenerateBabelConfigOptions['presetReact'],
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
        } as GenerateBabelConfigOptions['presetTypeScript'],
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
        } as GenerateBabelConfigOptions['pluginDecorators'],
      ],

      // preset-env内置了下面插件,webpack打包不需要下面插件
      // vite dev使用esbuild打包,不需要preset和transform-runtime,需要下面插件
      classProperties && [
        require.resolve('@babel/plugin-proposal-class-properties'),
        {
          loose: true,
          ...classProperties,
        } as GenerateBabelConfigOptions['classProperties'],
      ],
      classProperties && [
        require.resolve('@babel/plugin-proposal-private-methods'),
        {
          loose: true,
          ...classProperties,
        } as GenerateBabelConfigOptions['classProperties'],
      ],
      classProperties && [
        require.resolve('@babel/plugin-proposal-private-property-in-object'),
        {
          loose: true,
          ...classProperties,
        } as GenerateBabelConfigOptions['classProperties'],
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
        } as GenerateBabelConfigOptions['pluginTransformRuntime'],
      ],
    ].concat(extraPlugins)
      .filter(Boolean),
  };
}
