interface GenerateBabelConfigOptions {
  presetEnv?: any;
  presetReact?: any;
  presetTypeScript?: any;
  pluginTransformRuntime?: any;
  pluginLockCoreJS?: any;
  pluginDynamicImportNode?: any;
  pluginAutoCSSModules?: any;
  stripExports?: { exports: string[]; };
  classPropertiesLoose?: any;
  pluginStyledComponents?: any;
  pluginDecorators?: any;
}

export function generateBabelConfig({
  presetEnv,
  presetReact,
}: GenerateBabelConfigOptions = {}) {
  return {
    presets: [
      [
        require.resolve('@babel/preset-env'),
        {
          modules: false, // modules预先将es6模块转成"amd" | "umd" | "systemjs" | "commonjs", 值为false则不转换
          useBuiltIns: 'usage',
          corejs: {
            version: 3,
            proposals: true,
          },
        },
      ],
      require.resolve('@babel/preset-react'), // 转换jsx语法
      require.resolve('@babel/preset-typescript'),
    ],
    plugins: [
      require.resolve('@babel/plugin-syntax-dynamic-import'), // 支持动态import
      [
        require.resolve('@babel/plugin-proposal-decorators'),
        { version: 'legacy' },
      ], // 支持装饰器语法
      [
        require.resolve('@babel/plugin-proposal-class-properties'),
        { loose: false },
      ], // 支持class属性初始化和static
      require.resolve('@babel/plugin-proposal-export-default-from'), // 支持 export v from 'mod'语法
      require.resolve('@babel/plugin-syntax-import-meta'),
      require.resolve('@babel/plugin-transform-runtime'),
    ],
  };
}
