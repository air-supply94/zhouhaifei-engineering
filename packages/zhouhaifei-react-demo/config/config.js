module.exports = function(utils) {
  return {
    less: { theme: require('zhouhaifei-config').theme() },
    otherConfig: { externals: require('zhouhaifei-config').webpackConfig.externals },
  };
};
