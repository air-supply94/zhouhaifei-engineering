import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src'],
  format: ['cjs'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  target: 'node20',
  minify: true,
  shims: true,
});
