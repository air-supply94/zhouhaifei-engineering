module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-config-prettier',
    'stylelint-config-rational-order',
  ].map((key) => require.resolve(key)),
  plugins: [
    'stylelint-order',
    'stylelint-declaration-block-no-ignored-properties',
  ].map((key) => require.resolve(key)),
  rules: {
    /*
     *  stylelint-config-standard
     * https://github.com/stylelint/stylelint/issues/4114
     */
    'function-calc-no-invalid': null,
    'plugin/declaration-block-no-ignored-properties': true,
    'color-hex-length': null,
    'declaration-block-trailing-semicolon': null,
    'at-rule-empty-line-before': null,
    'no-eol-whitespace': null,
    'at-rule-no-unknown': null,
    'string-quotes': 'single',
    'block-no-empty': null,
    'comment-whitespace-inside': 'always',
    'comment-no-empty': true,
    'no-missing-end-of-source-newline': null,
    'comment-empty-line-before': null,
    'selector-pseudo-class-no-unknown': null,
    'declaration-empty-line-before': null,
    'function-comma-newline-after': null,
    'function-name-case': null,
    'function-parentheses-newline-inside': null,
    'function-max-empty-lines': null,
    'function-whitespace-after': null,
    'number-leading-zero': null,
    'number-no-trailing-zeros': null,
    'rule-empty-line-before': null,
    'selector-combinator-space-after': null,
    'selector-list-comma-newline-after': null,
    'selector-pseudo-element-colon-notation': null,
    'unit-no-unknown': null,
    'value-list-max-empty-lines': null,
    'font-family-no-missing-generic-family-keyword': null,
    'no-descending-specificity': null,
  },
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
  ],
};
