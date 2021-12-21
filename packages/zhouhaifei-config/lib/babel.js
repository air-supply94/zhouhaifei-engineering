module.exports = function (isWeb = true) {
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

  const basePlugins = [
    require.resolve('@babel/plugin-syntax-dynamic-import'), // 支持动态import
    [
      require.resolve('@babel/plugin-proposal-decorators'),
      {legacy: true},
    ], // 支持装饰器语法
    [
      require.resolve('@babel/plugin-proposal-class-properties'),
      {loose: false},
    ], // 支持class属性初始化和static
    require.resolve('@babel/plugin-proposal-export-default-from'), // 支持 export v from 'mod'语法
    require.resolve('@babel/plugin-syntax-import-meta'),
    [require.resolve('@babel/plugin-transform-runtime'), {corejs: 3, proposals: true}],
  ];

  const pluginImport = [
    [
      require.resolve('babel-plugin-import'),
      {
        libraryName: isWeb ? 'antd' : 'antd-mobile',
        libraryDirectory: 'es',
        style: true,
      },
    ]
  ];
  const useEsBuild = typeof process.env.USE_ESBUILD === 'string' && process.env.USE_ESBUILD.toLocaleUpperCase() === 'YES';

  return {
    env: {
      development: {
        presets,
        plugins: useEsBuild ? basePlugins : pluginImport.concat(basePlugins),
      },
      production: {
        presets,
        plugins: pluginImport.concat(basePlugins),
      },
      test: {
        presets: [
          [
            require.resolve('@babel/preset-env'),
            {
              modules: 'commonjs', // modules预先将es6模块转成"amd" | "umd" | "systemjs" | "commonjs", 值为false则不转换
            },
          ],
          require.resolve('@babel/preset-react'), // 转换jsx语法
          require.resolve('@babel/preset-typescript'),
        ],
        plugins: basePlugins,
      },
    },
  };
};
