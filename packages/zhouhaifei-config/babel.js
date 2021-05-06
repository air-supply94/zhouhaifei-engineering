module.exports = function(isWeb = true) {
  const presets = [
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
  ];
  const plugins = [
    [
      require.resolve('babel-plugin-import'),
      {
        libraryName: isWeb ? 'antd' : 'antd-mobile',
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
      '@babel/plugin-proposal-class-properties',
      { loose: true },
    ], // 支持class属性初始化和static
    require.resolve('@babel/plugin-proposal-export-default-from'), // 支持 export v from 'mod'语法
    require.resolve('@babel/plugin-syntax-import-meta'),
    [require.resolve('@babel/plugin-transform-runtime')],
  ];

  return {
    env: {
      development: {
        presets,
        plugins,
      },
      production: {
        presets,
        plugins,
      },
      test: {
        presets: [
          require.resolve('@babel/preset-env'),
          require.resolve('@babel/preset-typescript'),
        ],
        plugins: [require.resolve('@babel/plugin-transform-runtime')],
      },
    },
  };
};
