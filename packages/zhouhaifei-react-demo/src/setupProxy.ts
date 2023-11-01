const target = 'http://127.0.0.1';
const context: any[] = [];

export default context.reduce((prev, current) => {
  prev[current] = {
    target,
    changeOrigin: true,
    secure: false,
  };
  return prev;
}, {});
