const target = 'http://127.0.0.1';
const context = [];

if (process.env.IS_VITE === 'YES') {
  module.exports = context.reduce((prev, current) => {
    prev[current] = {
      target,
      changeOrigin: true,
      secure: false,
    };
    return prev;
  }, {});
} else {
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
  };
}

