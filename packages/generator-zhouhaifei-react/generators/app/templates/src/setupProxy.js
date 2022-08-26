// const target = 'http://192.168.200.112';
// const target = 'http://testwms.ejlerp.cn';
const target = 'https://cdtestlogin.ejingling.cn/';

// const target = 'http://dapwms.runscm.com';
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

module.exports = function(app, proxy) {
  app.use(
    proxy.createProxyMiddleware(
      context,
      {
        changeOrigin: true,
        target,
        secure: false,
      }
    )
  );

  app.use(
    proxy.createProxyMiddleware(
      '/js-xlsx',
      {
        changeOrigin: true,
        target: 'https://dap108.runscm.com',
        secure: false,
      }
    )
  );
};
