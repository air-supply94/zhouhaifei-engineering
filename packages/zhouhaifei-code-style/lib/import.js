module.exports = {
  'import/order': [
    'warn',
    {
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
    },
  ],
  'import/no-unresolved': 'off',
  'import/named': 'error',
  'import/no-absolute-path': 'error',
  'import/no-dynamic-require': 'off',
  'import/no-self-import': 'error',
  'import/no-cycle': 'error',
  'import/no-useless-path-segments': 'error',
  'import/first': 'error',
  'import/newline-after-import': 'error',
  'import/no-duplicates': 'error',
};
