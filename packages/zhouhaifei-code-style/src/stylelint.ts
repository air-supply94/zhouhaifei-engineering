export const stylelint = {
  extends: [require.resolve('stylelint-config-css-modules')],
  plugins: [require.resolve('stylelint-order')],
  rules: {
    // recommend
    'at-rule-no-unknown': true,
    'block-no-empty': true,
    'color-no-invalid-hex': true,
    'comment-no-empty': true,
    'declaration-block-no-duplicate-custom-properties': true,
    'declaration-block-no-duplicate-properties': [
      true,
      { ignore: ['consecutive-duplicates-with-different-values']},
    ],
    'declaration-block-no-shorthand-property-overrides': true,
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'keyframe-declaration-no-important': true,
    'media-feature-name-no-unknown': true,
    'named-grid-areas-no-invalid': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-invalid-double-slash-comments': true,
    'no-invalid-position-at-import-rule': true,
    'no-irregular-whitespace': true,
    'property-no-unknown': null,
    'selector-pseudo-element-no-unknown': true,
    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['global']},
    ],
    'no-descending-specificity': null,
    'selector-type-no-unknown': [
      true,
      { ignore: ['custom-elements']},
    ],
    'string-no-newline': true,
    'unit-no-unknown': true,

    // config-standard
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-no-redundant-longhand-properties': null,
    'font-family-name-quotes': 'always-where-recommended',
    'function-name-case': 'lower',
    'function-url-quotes': null,
    'number-max-precision': null,
    'property-no-vendor-prefix': null,
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'selector-class-pattern': null,
    'selector-type-case': 'lower',
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

    // selector
    'selector-attribute-quotes': 'always',

    // at-rule
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
    'comment-empty-line-before': [
      'always',
      { except: ['first-nested']},
    ],
    'comment-whitespace-inside': 'always',

    // value
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
    'value-keyword-case': 'lower',

    // other
    'color-hex-length': 'short',
    'at-rule-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'selector-pseudo-element-colon-notation': 'double',
    'selector-no-vendor-prefix': true,
    'value-no-vendor-prefix': null,
    'shorthand-property-no-redundant-values': true,
    'length-zero-no-unit': true,
    'color-function-notation': null,
    'hue-degree-notation': 'angle',
    'alpha-value-notation': 'number',
  },
};
