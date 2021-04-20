'use strict';

const postcss = require('postcss');
const Px2rem = require('px2rem');

module.exports = postcss.plugin('postcss-px2rem', (options) => {
  return function(css, result) {
    const oldCssText = css.toString();
    const px2remIns = new Px2rem(options);
    const newCssText = px2remIns.generateRem(oldCssText);
    const newCssObj = postcss.parse(newCssText);
    result.root = newCssObj;
  };
});
