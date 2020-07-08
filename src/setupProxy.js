const target = '';
const context = [];

module.exports = function(app, proxy) {
  context.forEach((pathPrefix) => {
    app.use(
      proxy.createProxyMiddleware(
        pathPrefix,
        {
          changeOrigin: true,
          target,
          secure: false,
        }
      )
    );
  });
};
