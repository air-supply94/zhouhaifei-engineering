import type { UserConfig } from '@zhouhaifei/bundler-cli';

const target = 'https://cdtestcloudwms.ejingling.cn/';
const context = [
  '/api',
  '/sku',
  '/employee',
  '/category',
  '/baseSerializeSchema',
  '/brand',
  '/base',
  '/shop',
  '/warehouse',
  '/courier',
  '/city',
  '/district',
  '/province',
  '/organization',
  '/oms',
  '/basecommon',
  '/courier',
  '/productQuery',
  '/custom',
  '/address_courier',
  '/product',
  '/logRequest',
  '/skuQuery',
  '/accessLog',
  '/serial_number',
  '/fms',
  '/ejl-erp-oms',
  '/ejl-erp-wms',
  '/ejl-erp-oms-static',
  '/ejl-erp-wms-static',
  '/aftersale',
  '/warehouse_bin',
  '/warehouseShelf',
  '/eshop',
  '/page',
  '/static',
  '/logout',
  '/cw-ejl-erp-wms',
  '/ejl-pms',
  '/ejl-pos',
];
const proxy = context.reduce((prev, current) => {
  prev[current] = {
    target,
    changeOrigin: true,
    secure: false,
  };
  return prev;
}, {});

const config: UserConfig = {
  proxy,
  antd: { import: true },
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
};
export default config;
