import { defineConfig } from 'father';

export default defineConfig({
  extends: '../../.fatherrc.base.ts',
  prebundle: {
    deps: [
      'picocolors',
      'cac',
      'dotenv',
      'dotenv-expand'
    ],
  }
});
