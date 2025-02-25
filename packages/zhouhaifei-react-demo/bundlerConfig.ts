import type { UserConfig } from '@zhouhaifei/bundler-cli';

const proxy = [
  {
    target: 'http://localhost:8000',
    changeOrigin: true,
    secure: false,
    context: ['/api'],
  },
];

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
