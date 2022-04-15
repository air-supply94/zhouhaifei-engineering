const target = 'http://192.168.0.1';
const context = [];

module.exports = function(app, proxy) {
  app.use(
    proxy.createProxyMiddleware(
      context,
      {
        onProxyRes: function onProxyRes(proxyRes, req, res) {
          proxyRes.headers.connection = 'keep-alive';
        },
        changeOrigin: true,
        target,
        secure: false,
      }
    )
  );
};
