// eslint-disable-next-line @typescript-eslint/no-var-requires
const proxy = require('http-proxy-middleware');

const target = '';
const context = [];
module.exports = function(app) {
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
