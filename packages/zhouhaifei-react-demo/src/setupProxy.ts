const target = 'http://127.0.0.1';
const context: any[] = [];

export default process.env.IS_VITE === 'YES' ? context.reduce((prev, current) => {
  prev[current] = {
    target,
    changeOrigin: true,
    secure: false,
  };
  return prev;
}, {}) : function(app: any, createProxyMiddleware: any) {
  app.use(
    createProxyMiddleware(
      context,
      {
        changeOrigin: true,
        target,
        secure: false,
      }
    )
  );
};

