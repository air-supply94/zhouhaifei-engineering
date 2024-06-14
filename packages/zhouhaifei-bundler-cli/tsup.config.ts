import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/{cli,dev,build,index}.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  target: 'node20',
  minify: true,
  shims: true,
});
