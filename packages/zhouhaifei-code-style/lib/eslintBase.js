module.exports = {
  // Possible Errors
  'no-console': 0,

  // Best Practices
  'accessor-pairs': 2,
  'class-methods-use-this': 0,
  'consistent-return': 0,
  curly: 2,
  'default-case': 0,
  'dot-location': 0,
  eqeqeq: 0,
  'guard-for-in': 2,
  'no-alert': 0,
  'no-caller': 2,
  'no-div-regex': 2,
  'no-else-return': 0,
  'no-eval': 2,
  'no-extend-native': 2,
  'no-extra-bind': 2,
  'no-extra-label': 2,
  'no-floating-decimal': 2,
  'no-implicit-coercion': 2,
  'no-implicit-globals': 2,
  'no-lone-blocks': 2,
  'no-loop-func': 2,
  'no-multi-spaces': 2,
  'no-new-wrappers': 2,
  'no-octal-escape': 2,
  'no-param-reassign': 1,
  'no-proto': 2,
  'no-return-assign': 1,
  'no-return-await': 2,
  'no-sequences': 2,
  'no-unused-expressions': 0,
  'no-useless-return': 2,
  radix: 2,
  'require-await': 2,
  'wrap-iife': [
    2,
    'any',
  ],

  // Variables
  'no-undef-init': 2,

  // Stylistic Issues
  'no-tabs': 2,
  'no-mixed-spaces-and-tabs': 2,
  'array-bracket-newline': [
    2,
    { multiline: true },
  ],
  'array-bracket-spacing': [
    2,
    'never',
  ],
  'array-element-newline': [
    2,
    { minItems: 2 },
  ],
  'block-spacing': 2,
  'brace-style': 2,
  camelcase: 1,
  'comma-dangle': [
    2,
    {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'never',
      functions: 'never',
    },
  ],
  'comma-style': [
    2,
    'last',
  ],
  'computed-property-spacing': [
    2,
    'never',
  ],
  'eol-last': 2,
  'func-call-spacing': [
    2,
    'never',
  ],
  'function-paren-newline': 0,
  'implicit-arrow-linebreak': [
    2,
    'beside',
  ],
  indent: [
    'error',
    2,
    {
      SwitchCase: 1,
      ignoredNodes: ['TemplateLiteral'],
    },
  ],
  'jsx-quotes': [
    2,
    'prefer-double',
  ],
  'key-spacing': 2,
  'keyword-spacing': [
    2,
    {
      before: true,
      after: true,
    },
  ],
  'linebreak-style': [
    2,
    'unix',
  ],
  'lines-around-comment': [
    2,
    {
      beforeLineComment: true,
      beforeBlockComment: true,
      allowClassStart: true,
      allowObjectStart: true,
      allowBlockStart: true,
      allowArrayStart: true,
    },
  ],
  'lines-between-class-members': [
    2,
    'always',
  ],
  'new-cap': 0,
  'new-parens': 2,
  'newline-per-chained-call': [
    2,
    { ignoreChainWithDepth: 2 },
  ],
  'no-lonely-if': 0,
  'no-multiple-empty-lines': [
    2,
    {
      max: 1,
      maxEOF: 1,
      maxBOF: 1,
    },
  ],
  'no-trailing-spaces': [
    2,
    {
      skipBlankLines: true,
      ignoreComments: false,
    },
  ],
  'no-unneeded-ternary': 2,
  'no-whitespace-before-property': 2,
  'nonblock-statement-body-position': 2,
  'object-curly-newline': [
    2,
    {
      ObjectExpression: {
        multiline: true,
        minProperties: 2,
      },
      ImportDeclaration: 'never',
      ExportDeclaration: 'never',
    },
  ],
  'object-curly-spacing': [
    2,
    'always',
    {
      arraysInObjects: false,
      objectsInObjects: false,
    },
  ],
  'object-property-newline': [
    2,
    { allowAllPropertiesOnSameLine: false },
  ],
  'one-var': 0,
  'one-var-declaration-per-line': 2,
  'operator-assignment': 2,
  'operator-linebreak': 2,
  'padded-blocks': [
    2,
    'never',
  ],
  'prefer-object-spread': 2,
  'quote-props': [
    2,
    'as-needed',
    {
      unnecessary: true,
      numbers: true,
    },
  ],
  quotes: [
    2,
    'single',
  ],
  semi: 2,
  'semi-spacing': 2,
  'semi-style': [
    2,
    'last',
  ],
  'space-before-blocks': 2,
  'space-before-function-paren': [
    2,
    'never',
  ],
  'space-in-parens': [
    2,
    'never',
  ],
  'space-infix-ops': 2,
  'space-unary-ops': [
    2,
    {
      words: true,
      nonwords: false,
    },
  ],
  'switch-colon-spacing': [
    2,
    {
      before: false,
      after: true,
    },
  ],
  'template-tag-spacing': 2,
  'comma-spacing': [
    2,
    {
      before: false,
      after: true,
    },
  ],

  'no-prototype-builtins': 2,
  'spaced-comment': 2,
  'unicode-bom': [
    2,
    'never',
  ],

  'no-useless-escape': 0,
  'getter-return': 2,
  'no-unused-vars': 0,
  'no-redeclare': 0,
  'no-undef': 0,
  'no-use-before-define': 0,
  'max-len': 0,
  'no-labels': 2,
  'no-new-func': 2,
  'no-script-url': 2,
  'no-with': 2,
  'no-self-assign': 0,

  // ECMAScript 6
  'arrow-parens': [
    2,
    'always',
  ],
  'arrow-spacing': 2,
  'generator-star-spacing': [
    2,
    'after',
  ],
  'no-confusing-arrow': [
    2,
    { allowParens: true },
  ],
  'no-useless-computed-key': 2,
  'no-useless-rename': 2,
  'no-var': 2,
  'object-shorthand': [
    2,
    'always',
  ],
  'prefer-arrow-callback': 2,
  'prefer-const': 2,
  'prefer-spread': 2,
  'prefer-template': 2,
  'rest-spread-spacing': [
    2,
    'never',
  ],
  // has bug
  // 'template-curly-spacing': [
  //   2,
  //   'never',
  // ],
  'sort-imports': 0,
  'yield-star-spacing': [
    2,
    'after',
  ],
};
