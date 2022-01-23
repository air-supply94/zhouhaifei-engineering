const { getThemeVariables } = require('antd/dist/theme');

module.exports = function(utils) {
  return {
    less: {
      theme: getThemeVariables({
        dark: true, // 开启暗黑模式
        compact: true, // 开启紧凑模式
      }),
    },
    otherConfig: {
      /*      splitChunks: {
        cacheGroups: {
          vendors: {
            // 拆分第三方库
            test: /node_modules/,
            chunks: 'all',
            minChunks: 1,
            priority: 100,
            enforce: true,
          },
        },
      },*/
      externals: {
        lodash: {
          commonjs: 'lodash',
          commonjs2: 'lodash',
          amd: 'lodash',
          root: '_',
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
        mobx: {
          commonjs: 'mobx',
          commonjs2: 'mobx',
          amd: 'mobx',
          root: 'mobx',
        },
        'mobx-react': {
          commonjs: 'mobx-react',
          commonjs2: 'mobx-react',
          amd: 'mobx-react',
          root: 'mobxReact',
        },
        'mobx-react-lite': {
          commonjs: 'mobx-react-lite',
          commonjs2: 'mobx-react-lite',
          amd: 'mobx-react-lite',
          root: 'mobxReactLite',
        },
        moment: {
          commonjs: 'moment',
          commonjs2: 'moment',
          amd: 'moment',
          root: 'moment',
        },
      },
    },
  };
};
