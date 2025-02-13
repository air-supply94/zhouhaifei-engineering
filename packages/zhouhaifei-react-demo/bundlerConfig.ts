import type { UserConfig } from '@zhouhaifei/bundler-cli';

const target = 'http://localhost:8000';
const context = ['/api'];
const proxy = [{ target, changeOrigin: true, secure: false, context }];

const config: UserConfig = {
  enableTailwindcss: true,
  proxy,
  /*  externals: {
    underscore: '_',
    dayjs: 'dayjs',
    qs: 'Qs',
    axios: 'axios',
    react: 'React',
    'react-dom': 'ReactDOM',
    mobx: 'mobx',
  },*/
};
export default config;
