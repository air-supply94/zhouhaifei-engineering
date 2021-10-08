module.exports = {
  /**
   * core rule
   */
  // TypeScript's `noFallthroughCasesInSwitch` option is more robust (#6906)
  'default-case': 'off',

  '@typescript-eslint/array-type': [
    'error',
    { default: 'array-simple' },
  ],
  '@typescript-eslint/ban-ts-comment': 'off',
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': 'off',
  '@typescript-eslint/class-literal-property-style': [
    'error',
    'getters',
  ],
  '@typescript-eslint/consistent-type-definitions': [
    'error',
    'interface',
  ],
  '@typescript-eslint/consistent-type-imports': [
    'error',
    { prefer: 'type-imports' },
  ],
  '@typescript-eslint/explicit-member-accessibility': [
    'error',
    {
      accessibility: 'explicit',
      ignoredMethodNames: [
        'getDerivedStateFromProps',
        'componentDidMount',
        'render',
        'shouldComponentUpdate',
        'getSnapshotBeforeUpdate',
        'componentDidUpdate',
        'componentWillUnmount',
        'getDerivedStateFromError',
        'componentDidCatch',
        'componentWillUpdate',
        'componentWillReceiveProps',
      ],
      overrides: {
        accessors: 'explicit',
        constructors: 'no-public',
        methods: 'explicit',
        properties: 'explicit',
        parameterProperties: 'explicit',
      },
    },
  ],
  '@typescript-eslint/member-delimiter-style': [
    'error',
    {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi',
        requireLast: true,
      },
    },
  ],
  '@typescript-eslint/method-signature-style': [
    'error',
    'property',
  ],
  '@typescript-eslint/type-annotation-spacing': [
    'error',
    { after: true },
  ],
  '@typescript-eslint/no-namespace': 'error',

  /**
   * extension rule
   */
  'brace-style': 'off',
  '@typescript-eslint/brace-style': ['error'],
  'comma-spacing': 'off',
  '@typescript-eslint/comma-spacing': [
    'error',
    {
      before: false,
      after: true,
    },
  ],
  'func-call-spacing': 'off',
  '@typescript-eslint/func-call-spacing': [
    'error',
    'never',
  ],
  indent: 'off',
  '@typescript-eslint/indent': [
    'error',
    2,
    { SwitchCase: 1 },
  ],
  'keyword-spacing': 'off',
  '@typescript-eslint/keyword-spacing': [
    'error',
    {
      before: true,
      after: true,
    },
  ],
  'lines-between-class-members': 'off',
  '@typescript-eslint/lines-between-class-members': [
    'error',
    'always',
  ],
  'object-curly-spacing': 'off',
  '@typescript-eslint/object-curly-spacing': [
    'error',
    'always',
    {
      arraysInObjects: false,
      objectsInObjects: false,
    },
  ],
  'no-array-constructor': 'off',
  '@typescript-eslint/no-array-constructor': 'warn',
  'space-infix-ops': 'off',
  '@typescript-eslint/space-infix-ops': [
    'error',
    { 'int32Hint': false },
  ],

  // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/291)
  'no-dupe-class-members': 'off',
  quotes: 'off',
  '@typescript-eslint/quotes': [
    'error',
    'single',
  ],
  semi: 'off',
  '@typescript-eslint/semi': ['error'],
  'space-before-function-paren': 'off',
  '@typescript-eslint/space-before-function-paren': [
    'error',
    'never',
  ],
};
