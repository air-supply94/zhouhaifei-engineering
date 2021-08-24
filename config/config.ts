import { defineConfig } from 'dumi';

const homepage = 'https://air-supply94.github.io/zhouhaifei-react-scripts/';
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  title: '文档',
  base: isProduction ? homepage : undefined,
  publicPath: isProduction ? homepage : undefined,

  // favicon: null,
  // logo: null,
  outputPath: 'dist',
  hash: true,
  mode: 'site',
  locales: [
    [
      'zh-CN',
      '中文',
    ],
    [
      'en-US',
      'English',
    ],
  ],
  navs: {
    'zh-CN': [
      null,
      {
        title: 'GitHub',
        path: 'https://github.com/air-supply94/zhouhaifei-react-scripts.git',
      },
      {
        title: '更新日志',
        path: 'https://github.com/air-supply94/zhouhaifei-react-scripts/blob/master/CHANGELOG.md',
      },
    ],
    'en-US': [
      null,
      {
        title: 'GitHub',
        path: 'https://github.com/air-supply94/zhouhaifei-react-scripts.git',
      },
      {
        title: '更新日志',
        path: 'https://github.com/air-supply94/zhouhaifei-react-scripts/blob/master/CHANGELOG.md',
      },
    ],
  },
  exportStatic: {},
});
