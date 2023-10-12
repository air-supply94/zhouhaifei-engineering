import type { RollupOptions } from 'rollup';
import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import dts from 'rollup-plugin-dts';

export default (commandLineArgs: any): RollupOptions[] => {
  return defineConfig([
    {
      input: './src/index.ts',
      output: {
        file: 'dist/index.cjs',
        format: 'cjs',
        sourcemap: true,
      },
      external: [/node_modules/],
      plugins: [
        json(),
        resolve(),
        commonjs(),
        typescript(),
      ],
    },
    {
      input: './src/index.ts',
      output: {
        file: 'dist/index.mjs',
        format: 'es',
        sourcemap: true,
      },
      external: [/node_modules/],
      plugins: [
        json(),
        resolve(),
        commonjs(),
        typescript(),
      ],
    },
    {
      input: './src/index.ts',
      plugins: [dts()],
      output: {
        format: 'esm',
        file: 'dist/index.d.ts',
      },
    },
  ]);
};
