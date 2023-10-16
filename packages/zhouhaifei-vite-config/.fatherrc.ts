import { defineConfig } from 'father';

export default defineConfig({
  cjs: { sourcemap: true },
  esm: { sourcemap: true },
  platform: 'node'
});
