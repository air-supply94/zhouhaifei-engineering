module.exports = {
  // hooks
  'react-hooks/rules-of-hooks': 2,

  // react/jsx
  'react/require-default-props': 0,
  'react/no-unused-state': 0,
  'react/no-unused-prop-types': 0,
  'react/prop-types': 0,
  'react/forbid-prop-types': 0,
  'react/no-danger': 0,
  'react/destructuring-assignment': 0,
  'react/no-multi-comp': 0,
  'react/prefer-stateless-function': 0,
  'react/jsx-filename-extension': [
    1,
    {
      extensions: [
        '.js',
        '.jsx',
        '.ts',
        '.tsx',
      ],
    },
  ],

  'jsx-a11y/no-static-element-interactions': 0,
  'jsx-a11y/anchor-has-content': 0,
  'jsx-a11y/click-events-have-key-events': 0,
  'jsx-a11y/anchor-is-valid': 0,
  'react/self-closing-comp': [
    2,
    {
      'component': true,
      'html': true,
    },
  ],
  'react/jsx-boolean-value': 2,
  'react/no-array-index-key': 2,
  'react/jsx-wrap-multilines': [
    2,
    {
      'declaration': 'parens-new-line',
      'assignment': 'parens-new-line',
      'return': 'parens-new-line',
      'arrow': 'parens-new-line',
      'condition': 'parens-new-line',
      'logical': 'parens-new-line',
      'prop': 'parens-new-line',
    },
  ],
  'react/jsx-uses-react': 2,
  'react/jsx-uses-vars': 2,
  'react/button-has-type': 2,
  'react/no-access-state-in-setstate': 2,
  'react/no-direct-mutation-state': 2,
  'react/no-string-refs': 2,
  'react/no-typos': 2,
  'react/no-unknown-property': 2,
  'react/no-unsafe': 2,
  'react/prefer-es6-class': 2,
  'react/sort-comp': [
    2,
    {
      order: [
        'static-methods',
        'lifecycle',
        'everything-else',
        'render',
      ],
      groups: {
        lifecycle: [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'state',
          'getInitialState',
          'getChildContext',
          'getDerivedStateFromProps',
          'componentWillMount',
          'UNSAFE_componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'UNSAFE_componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'UNSAFE_componentWillUpdate',
          'getSnapshotBeforeUpdate',
          'componentDidUpdate',
          'componentDidCatch',
          'componentWillUnmount',
        ],
      },
    },
  ],
  'react/jsx-closing-bracket-location': [
    2,
    'tag-aligned',
  ],
  'react/jsx-closing-tag-location': 2,
  'react/jsx-curly-brace-presence': [
    2,
    'never',
  ],
  'react/jsx-curly-newline': 2,
  'react/jsx-curly-spacing': [
    2,
    { 'when': 'never' },
  ],
  'react/jsx-equals-spacing': [
    2,
    'never',
  ],
  'react/jsx-fragments': 2,
  'react/jsx-first-prop-new-line': [
    2,
    'multiline-multiprop',
  ],
  'react/jsx-handler-names': 1,
  'react/jsx-indent': [
    2,
    2,
  ],
  'react/jsx-indent-props': [
    2,
    2,
  ],
  'react/jsx-key': 1,
  'react/jsx-max-props-per-line': [
    2,
    {
      'maximum': 1,
      'when': 'always',
    },
  ],
  'react/jsx-no-duplicate-props': 2,
  'react/jsx-no-script-url': [
    2,
    [
      {
        'name': 'Link',
        'props': ['to'],
      },
      {
        'name': 'a',
        'props': [
          'href',
          'to',
        ],
      },
    ],
  ],
  'react/jsx-no-target-blank': 2,
  'react/jsx-no-useless-fragment': 2,
  'react/jsx-one-expression-per-line': 2,
  'react/jsx-pascal-case': 2,
  'react/jsx-props-no-multi-spaces': 0,
  'react/jsx-sort-props': 2,
  'react/jsx-space-before-closing': [
    2,
    'never',
  ],
  'react/jsx-tag-spacing': [
    2,
    {
      'closingSlash': 'never',
      'beforeSelfClosing': 'never',
      'afterOpening': 'never',
      'beforeClosing': 'never',
    },
  ],
};
