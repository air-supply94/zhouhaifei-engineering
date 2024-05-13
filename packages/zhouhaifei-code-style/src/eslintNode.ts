import { eslintBaseRules } from './eslintBaseRules';
import { eslintTypescriptRules } from './eslintTypescriptRules';

export const eslintNode = {
  root: true,
  parser: '@babel/eslint-parser',
  extends: ['eslint:recommended'],
  plugins: ['import'],
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  rules: eslintBaseRules,
  overrides: [
    {
      files: ['{**/*,*}.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: { project: 'tsconfig.json' },
      extends: ['plugin:@typescript-eslint/recommended'],
      plugins: ['@typescript-eslint'],
      rules: eslintTypescriptRules,
    },
  ],
};
