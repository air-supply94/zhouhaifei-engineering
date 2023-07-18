import type { RollupOptions } from 'rollup';
import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import path from 'path';

export default (commandLineArgs: any): RollupOptions[] => {
  return defineConfig([
    {
      input: './src/index.ts',
      output: {
        file: path.resolve('./dist', 'index.cjs'),
        format: 'cjs',
        sourcemap: true,
      },
      external: [/node_modules/],
      plugins: [
        json(),
        resolve(),
        commonjs(),
        typescript({ tsconfig: path.resolve('./', 'tsconfig.json') }),
      ],
    },
    {
      input: './src/index.ts',
      output: {
        file: path.resolve('./dist', 'index.js'),
        format: 'es',
        sourcemap: true,
      },
      external: [/node_modules/],
      plugins: [
        json(),
        resolve(),
        commonjs(),
        typescript({ tsconfig: path.resolve('./', 'tsconfig.json') }),
      ],
    },
  ]);
};
