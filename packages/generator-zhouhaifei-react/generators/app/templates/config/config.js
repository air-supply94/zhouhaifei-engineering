module.exports = function(utils) {
  return {
    otherConfig: {
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
