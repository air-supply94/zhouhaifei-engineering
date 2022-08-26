export default {
  esm: 'rollup',
  autoprefixer: {
    remove: false,
    grid: true,
  },
  extractCSS: true,
  lessInRollupMode: {modifyVars: require('zhouhaifei-config/lib/theme/index.js')()},
  extraBabelPlugins: [
    ['babel-plugin-import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }],
  ],
  extraExternals: [
    'antd',
    'lodash',
    'qs',
    'axios',
    'react',
    'react-dom',
    'history',
    'mobx',
    'mobx-react',
    'mobx-react-lite',
    'moment',
  ],
};
