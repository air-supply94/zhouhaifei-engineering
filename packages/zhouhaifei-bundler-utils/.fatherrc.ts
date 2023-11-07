import {defineConfig} from 'father';

export default defineConfig({
  extends: '../../.fatherrc.base.ts',
  prebundle: {
    deps: [
      'chalk',
      'cross-spawn',
      'cac',
      'open',
      'dotenv',
      'dotenv-expand'
    ],
  }
});
