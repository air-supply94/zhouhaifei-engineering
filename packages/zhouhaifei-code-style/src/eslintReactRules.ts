export const eslintReactRules = {
  // hooks
  'react-hooks/rules-of-hooks': 2,
  'react-hooks/exhaustive-deps': 2,

  // eslint-plugin-react
  'react/display-name': 0,
  'react/prop-types': 0,
  'react/jsx-boolean-value': 2,
  'react/jsx-curly-brace-presence': [2, 'never'],
  'react/jsx-fragments': 2,
  'react/jsx-no-leaked-render': 2,
  'react/jsx-no-useless-fragment': 2,
  'react/no-arrow-function-lifecycle': 2,
  'react/prefer-read-only-props': 2,
  'react/self-closing-comp': [
    2,
    {
      component: true,
      html: true,
    },
  ],
  'react/jsx-pascal-case': 2,
  'react/button-has-type': 2,
  'react/no-access-state-in-setstate': 2,
  'react/no-typos': 2,
  'react/prefer-es6-class': 2,
  'react/no-array-index-key': 2,
  'react/jsx-no-script-url': [
    2,
    [
      {
        name: 'Link',
        props: ['to'],
      },
      {
        name: 'a',
        props: ['href', 'to'],
      },
    ],
  ],

  // eslint-plugin-jsx-a11y
  'jsx-a11y/no-static-element-interactions': 0,
  'jsx-a11y/anchor-has-content': 0,
  'jsx-a11y/click-events-have-key-events': 0,
  'jsx-a11y/anchor-is-valid': 0,
};
