import {defineConfig} from 'father';

export default defineConfig({
  cjs: {
    sourcemap: true,
    transformer: "esbuild"
  },
  platform: 'node'
});
