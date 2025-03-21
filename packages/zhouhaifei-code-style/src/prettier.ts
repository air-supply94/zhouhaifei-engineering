export const prettier = {
  printWidth: 120,
  tabWidth: 2,
  singleQuote: true,
  singleAttributePerLine: true,
  plugins: ['prettier-plugin-packagejson'],
  overrides: [
    {
      files: ['*.css', '*.less', '*.scss', '*.sass'],
      options: { singleQuote: false },
    },
  ],
};
