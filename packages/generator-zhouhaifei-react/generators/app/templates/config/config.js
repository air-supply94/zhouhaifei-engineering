module.exports = function(utils) {
  return {
    less: { theme: require('@zhouhaifei/pc-config').theme() },
    otherConfig: { externals: require('@zhouhaifei/pc-config').webpackConfig.externals },
  };
};
