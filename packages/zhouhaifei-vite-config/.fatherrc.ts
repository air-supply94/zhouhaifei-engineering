import {defineConfig} from 'father';

export default defineConfig({
  extends: '../../.fatherrc.base.ts',
  prebundle: {
    deps: [
      'vite-plugin-html',
      'vite-plugin-load-css-module',
      'vite-plugin-require-transform',
      'vite-plugin-style-import'
    ],
    extraExternals: {
      "@babel/core": "@zhouhaifei/babel-preset/compiled/@babel/core",
      "dotenv": "@zhouhaifei/bundler-utils/compiled/dotenv",
      "dotenv-expand": "@zhouhaifei/bundler-utils/compiled/dotenv-expand",
    }
  }
});
