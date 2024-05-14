import { eslintBaseRules } from './eslintBaseRules';
import { eslintReactRules } from './eslintReactRules';
import { eslintTypescriptRules } from './eslintTypescriptRules';

export const eslintReact = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: { requireConfigFile: false },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:jsx-a11y/recommended'],
  plugins: ['import', 'jsx-a11y', 'react', 'react-hooks'],
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    ...eslintBaseRules,
    ...eslintReactRules,
  },

  overrides: [
    {
      files: ['{**/*,*}.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      parserOptions: { project: 'tsconfig.json' },
      extends: ['plugin:@typescript-eslint/recommended'],
      plugins: ['@typescript-eslint'],
      rules: eslintTypescriptRules,
    },
  ],
};
