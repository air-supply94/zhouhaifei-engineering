module.exports = function(utils) {
  return {
    entry: utils.isDevelopment ? [] : { commons: ['@/utils']},
    optimization: utils.isDevelopment ? {} : {
      splitChunks: {
        cacheGroups: {
          // 提取公共包
          commons: {
            chunks: 'initial', // 必须三选一： "initial" | "all" | "async"(默认就是异步)
            name: 'commons',
            minChunks: 2,
            minSize: 0,
            priority: 2,
          },
        },
      },
    },
    externals: {
      lodash: {
        commonjs: 'lodash',
        commonjs2: 'lodash',
        amd: 'lodash',
        root: '_',
      },
      echarts: {
        commonjs: 'echarts',
        commonjs2: 'echarts',
        amd: 'echarts',
        root: 'echarts',
      },
      qs: {
        commonjs: 'qs',
        commonjs2: 'qs',
        amd: 'qs',
        root: 'Qs',
      },
      axios: {
        commonjs: 'axios',
        commonjs2: 'axios',
        amd: 'axios',
        root: 'axios',
      },
      moment: {
        commonjs: 'moment',
        commonjs2: 'moment',
        amd: 'moment',
        root: 'moment',
      },
      react: {
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'react',
        root: 'React',
      },
      'react-dom': {
        commonjs: 'react-dom',
        commonjs2: 'react-dom',
        amd: 'react-dom',
        root: 'ReactDOM',
      },
      redux: {
        commonjs: 'redux',
        commonjs2: 'redux',
        amd: 'redux',
        root: 'Redux',
      },
      'react-redux': {
        commonjs: 'react-redux',
        commonjs2: 'react-redux',
        amd: 'react-redux',
        root: 'ReactRedux',
      },
    },
  };
};
