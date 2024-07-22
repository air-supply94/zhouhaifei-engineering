import type { UserConfig } from '@zhouhaifei/bundler-cli';

const target = 'http://localhost:8000';
const context = ['/api'];
const proxy = context.reduce((prev: Record<string, any>, current) => {
  prev[current] = {
    target,
    changeOrigin: true,
    secure: false,
  };
  return prev;
}, {});

const config: UserConfig = {
  tailwindcssOptions: true,
  proxy,
  externals: {
    underscore: '_',
    dayjs: 'dayjs',
    qs: 'Qs',
    axios: 'axios',
    react: 'React',
    'react-dom': 'ReactDOM',
  },
};
export default config;
