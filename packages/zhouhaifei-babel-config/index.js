const presets = [
  [
    '@babel/preset-env',
    {
      modules: false, // modules预先将es6模块转成"amd" | "umd" | "systemjs" | "commonjs", 值为false则不转换
      useBuiltIns: 'usage',
      corejs: {
        version: 3,
        proposals: true,
      },
    },
  ],
  '@babel/preset-react', // 转换jsx语法
  '@babel/preset-typescript',
];
const plugins = [
  // ant-design按需引入
  [
    'import',
    {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    },
  ],
  require.resolve('@babel/plugin-syntax-dynamic-import'), // 支持动态import
  [
    require.resolve('@babel/plugin-proposal-decorators'),
    { legacy: true },
  ], // 支持装饰器语法
  [
    require.resolve('@babel/plugin-proposal-class-properties'),
    { loose: true },
  ], // 支持class属性初始化和static
  require.resolve('@babel/plugin-proposal-object-rest-spread'), // 支持...rest
  require.resolve('@babel/plugin-proposal-export-default-from'), // 支持 export v from 'mod'语法
  require.resolve('@babel/plugin-proposal-export-namespace-from'), // 支持 export * as ns from 'mod'
  require.resolve('@babel/plugin-syntax-import-meta'),
  require.resolve('@babel/plugin-proposal-json-strings'),
  [require.resolve('@babel/plugin-transform-runtime')],
  [require.resolve('@babel/plugin-proposal-optional-chaining')],
];

module.exports = {
  presets,
  plugins,
};
