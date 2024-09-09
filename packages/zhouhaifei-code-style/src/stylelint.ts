export const stylelint = {
  extends: ['stylelint-config-standard', 'stylelint-config-css-modules'],
  plugins: ['stylelint-order'],
  rules: {
    'property-no-vendor-prefix': null,
    'value-no-vendor-prefix': null,
    'at-rule-no-vendor-prefix': null,
    'media-feature-name-no-vendor-prefix': null,
    'selector-no-vendor-prefix': null,

    'at-rule-empty-line-before': ['always', { except: ['inside-block', 'blockless-after-blockless', 'first-nested'] }],
    'custom-property-empty-line-before': [
      'never',
      { except: ['first-nested', 'after-comment', 'after-custom-property'] },
    ],
    'declaration-empty-line-before': [
      'always',
      {
        except: ['after-comment', 'after-declaration', 'first-nested'],
        ignore: ['inside-single-line-block'],
      },
    ],
    'number-max-precision': null,
    'alpha-value-notation': 'number',
    'color-function-notation': null,

    'custom-media-pattern': null,
    'custom-property-pattern': null,
    'keyframes-name-pattern': null,
    'selector-id-pattern': null,
    'selector-class-pattern': null,
    'function-url-quotes': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'no-descending-specificity': null,
  },
};
