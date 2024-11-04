import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

export interface BabelConfigOptions {
  babelExtraPreset?: any;
  babelExtraPlugins?: any;
  babelPresetEnv?:
    | false
    | {
        targets: string | string[] | Record<string, string>;
        bugfixes?: boolean;
        spec?: boolean;
        loose?: boolean;
        modules?: 'amd' | 'umd' | 'systemjs' | 'commonjs' | 'cjs' | 'auto' | false;
        debug?: boolean;
        include?: Array<string | RegExp>;
        exclude?: Array<string | RegExp>;
        useBuiltIns?: 'usage' | 'entry' | false;
        corejs?: { version: string; proposals: boolean };
        configPath?: string;
        ignoreBrowserslistConfig?: boolean;
        browserslistEnv?: string;
        shippedProposals?: boolean;
      };
  babelPresetReact?:
    | false
    | {
        runtime?: 'classic' | 'automatic';
        development?: boolean;
        throwIfNamespace?: boolean;
        pure?: boolean;
        importSource?: string;
        pragma?: string;
        pragmaFrag?: string;
      };
  babelPresetTypeScript?:
    | false
    | {
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
  babelPluginTransformRuntime?:
    | false
    | {
        corejs?: false | 2 | 3 | { version: 2 | 3; proposals: boolean };
        helpers?: boolean;
        regenerator?: boolean;
        absoluteRuntime?: string | boolean;
        version?: string;
      };
  babelPluginDecorators?:
    | false
    | {
        version?: '2023-05' | '2023-01' | '2022-03' | '2021-12' | '2018-09' | 'legacy';
        decoratorsBeforeExport?: boolean;
      };
}

export function getBabelConfig({
  babelExtraPreset,
  babelExtraPlugins,
  babelPresetEnv,
  babelPresetReact,
  babelPresetTypeScript,
  babelPluginTransformRuntime,
  babelPluginDecorators,
}: BabelConfigOptions = {}) {
  const packageJsonPath = new URL('../package.json', import.meta.url);
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8').toString());
  const coreJsVersion = packageJson.dependencies['core-js'];
  const runtimeVersion = packageJson.dependencies['@babel/runtime'];
  return {
    presets: [
      // preset-env
      babelPresetEnv !== false && [
        '@babel/preset-env',
        {
          bugfixes: true,
          loose: false,

          // 保留 es modules 语法,交给 webpack 处理
          modules: false,
          debug: false,
          useBuiltIns: 'usage',
          corejs: {
            version: coreJsVersion,
            proposals: true,
          },
          ignoreBrowserslistConfig: true,
          ...babelPresetEnv,
        } as BabelConfigOptions['babelPresetEnv'],
      ],

      // 转换jsx语法
      babelPresetReact !== false && [
        '@babel/preset-react',
        {
          runtime: 'automatic',
          development: process.env.NODE_ENV === 'development',
          ...babelPresetReact,
        } as BabelConfigOptions['babelPresetReact'],
      ],

      // 转换ts语法
      babelPresetTypeScript !== false && [
        '@babel/preset-typescript',
        {
          allowNamespaces: true,
          allowDeclareFields: true,
          onlyRemoveTypeImports: false,
          optimizeConstEnums: true,
          ...babelPresetTypeScript,
        } as BabelConfigOptions['babelPresetTypeScript'],
      ],
    ]
      .concat(babelExtraPreset)
      .filter(Boolean),

    plugins: [
      // 支持装饰器语法
      babelPluginDecorators !== false && [
        '@babel/plugin-proposal-decorators',
        {
          version: '2023-05',
          ...babelPluginDecorators,
        } as BabelConfigOptions['babelPluginDecorators'],
      ],

      // transform-runtime
      babelPluginTransformRuntime !== false && [
        '@babel/plugin-transform-runtime',
        {
          helpers: true,
          regenerator: true,
          absoluteRuntime: path.dirname(url.fileURLToPath(packageJsonPath)),
          version: runtimeVersion,
          ...babelPluginTransformRuntime,
        } as BabelConfigOptions['babelPluginTransformRuntime'],
      ],
    ]
      .concat(babelExtraPlugins)
      .filter(Boolean),
  };
}
