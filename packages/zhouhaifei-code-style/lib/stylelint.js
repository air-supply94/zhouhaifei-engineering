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
    // block
    'block-opening-brace-space-before': 'always',
    'block-opening-brace-space-after': 'always-single-line',
    'block-opening-brace-newline-after': 'always',
    'block-opening-brace-newline-before': 'always-single-line',
    'block-closing-brace-space-before': 'always-single-line',
    'block-closing-brace-space-after': 'always-single-line',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
    'block-closing-brace-empty-line-before': 'never',

    // declaration
    'declaration-block-trailing-semicolon': 'always',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-empty-line-before': [
      'always',
      {
        except: [
          'after-comment',
          'after-declaration',
          'first-nested',
        ],
      },
    ],
    'declaration-colon-space-before': 'never',
    'declaration-colon-space-after': 'always',
    'declaration-bang-space-before': 'always',
    'declaration-bang-space-after': 'never',

    // selector
    'selector-list-comma-space-before': 'never',
    'selector-list-comma-space-after': 'always-single-line',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-class-case': 'lower',
    'selector-descendant-combinator-no-non-space': true,
    'selector-combinator-space-before': 'always',
    'selector-combinator-space-after': 'always',
    'selector-attribute-quotes': 'always',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-brackets-space-inside': 'never',

    // media
    'media-query-list-comma-space-before': 'never',
    'media-query-list-comma-space-after': 'always',
    'media-query-list-comma-newline-before': 'never-multi-line',
    'media-query-list-comma-newline-after': 'never-multi-line',
    'media-feature-range-operator-space-before': 'always',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-colon-space-before': 'never',
    'media-feature-colon-space-after': 'always',

    // at-rule
    'at-rule-semicolon-newline-after': 'always',
    'at-rule-name-space-after': 'always',
    'at-rule-name-case': 'lower',
    'at-rule-empty-line-before': [
      'always',
      {
        except: [
          'inside-block',
          'blockless-after-blockless',
          'first-nested',
        ],
      },
    ],

    // General
    'indentation': 2,
    'linebreaks': 'unix',
    'max-empty-lines': 1,
    'no-eol-whitespace': true,
    'no-missing-end-of-source-newline': true,
    'no-empty-first-line': true,
    'comment-empty-line-before': [
      'always',
      { except: ['first-nested'] },
    ],
    'comment-whitespace-inside': 'always',

    // value
    'property-case': 'lower',
    'custom-property-empty-line-before': [
      'never',
      {
        except: [
          'first-nested',
          'after-comment',
          'after-custom-property',
        ],
      },
    ],
    'value-list-max-empty-lines': 0,
    'value-list-comma-space-before': 'never',
    'value-list-comma-space-after': 'always',
    'value-list-comma-newline-before': 'never-multi-line',
    'value-list-comma-newline-after': 'never-multi-line',
    'value-keyword-case': 'lower',
    'unit-case': 'lower',
    'string-quotes': 'double',
    'number-no-trailing-zeros': true,
    'number-leading-zero': 'always',

    // function
    'function-whitespace-after': 'always',
    'function-parentheses-space-inside': 'never',
    'function-parentheses-newline-inside': 'never-multi-line',
    'function-max-empty-lines': 0,
    'function-comma-space-before': 'never',
    'function-comma-space-after': 'always',
    'function-comma-newline-before': 'never-multi-line',
    'function-comma-newline-after': 'never-multi-line',

    // other
    'color-hex-length': 'short',
    'color-hex-case': 'lower',
    'at-rule-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'selector-pseudo-element-colon-notation': 'double',
    'selector-no-vendor-prefix': true,
    'selector-max-empty-lines': 0,
    'value-no-vendor-prefix': null,
    'shorthand-property-no-redundant-values': true,
    'length-zero-no-unit': true,
    'color-function-notation': null,
    'hue-degree-notation': 'angle',
    'alpha-value-notation': 'number',
    'no-extra-semicolons': true,
    'no-descending-specificity': null,
  },
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
  ],
};
