module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
  ],
  plugins: [
    'import',
    '@typescript-eslint',
    'jest',
  ],

  env: {
    worker: true,
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      ecmaVersion: 2018,
      legacyDecorators: true,
    },
  },

  settings: { react: { version: 'detect' } },

  rules: {
    ...require('./eslintBase'),
    ...require('./import'),
  },

  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          ecmaVersion: 2018,
          legacyDecorators: true,
        },
        // typescript-eslint specific options
        warnOnUnsupportedTypeScriptVersion: true,
      },
      extends: ['plugin:@typescript-eslint/recommended'],
      plugins: ['@typescript-eslint'],

      rules: { ...require('./typescript') },
    },
  ],
};
