import { defineConfig } from 'dumi';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  title: 'react工程化',
  base: isProduction ? '/zhouhaifei/' : undefined,
  publicPath: isProduction ? 'https://air-supply94.github.io/zhouhaifei/' : undefined,

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
        path: 'https://github.com/air-supply94/zhouhaifei.git',
      },
      {
        title: '更新日志',
        path: 'https://github.com/air-supply94/zhouhaifei/blob/master/CHANGELOG.md',
      },
    ],
    'en-US': [
      null,
      {
        title: 'GitHub',
        path: 'https://github.com/air-supply94/zhouhaifei.git',
      },
      {
        title: '更新日志',
        path: 'https://github.com/air-supply94/zhouhaifei/blob/master/CHANGELOG.md',
      },
    ],
  },
  exportStatic: {},
});
