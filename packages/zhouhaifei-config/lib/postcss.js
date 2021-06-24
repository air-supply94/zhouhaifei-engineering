'use strict';

const postcss = require('postcss');
const Px2rem = require('px2rem');

function px2rem(options) {
  return {
    postcssPlugin: 'postcss-px2rem',
    Once: (css, { result }) => {
      const oldCssText = css.toString();
      const px2remIns = new Px2rem(options);
      const newCssText = px2remIns.generateRem(oldCssText);
      const newCssObj = postcss.parse(newCssText);
      result.root = newCssObj;
    },
  };
}

module.exports = function(remUnit) {
  return {
    ident: 'postcss',
    plugins: [
      require('postcss-import'),
      require('postcss-preset-env')({
        stage: 0,
        autoprefixer: {
          remove: false,
          grid: true,
        },
      }),
      require('postcss-flexbugs-fixes'),
      remUnit ? px2rem({ remUnit }) : false,
    ].filter(Boolean),
  };
};
