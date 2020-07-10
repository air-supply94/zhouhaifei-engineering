module.exports = {
  sourceMap: true,
  ident: 'postcss',
  plugins: [
    require('postcss-import'),
    require('postcss-cssnext'),
    require('postcss-flexbugs-fixes'),
  ],
};
