const path = require('path');
const paths = require('./paths');
const utils = require('./utils');

module.exports = [
  {
    test: /\.(js|mjs|jsx|ts|tsx)$/,
    include: paths.appSrc,
    exclude: utils.exclude,
    use: [
      {
        loader: require.resolve('thread-loader'),
        options: {
          /* the number of spawned workers, defaults to (number of cpus - 1) or
             fallback to 1 when require('os').cpus() is undefined */
          workers: require('os').cpus().length,

          /* number of jobs a worker processes in parallel
             defaults to 20 */
          workerParallelJobs: 50,

          // additional node.js arguments
          workerNodeArgs: ['--max-old-space-size=1024'],

          /* Allow to respawn a dead worker pool
             respawning slows down the entire compilation
             and should be set to false for development */
          poolRespawn: false,

          /* timeout for killing the worker processes when idle
             defaults to 500 (ms)
             can be set to Infinity for watching builds to keep workers alive */
          poolTimeout: 2000,

          /* number of jobs the poll distributes to the workers
             defaults to 200
             decrease of less efficient but more fair distribution */
          poolParallelJobs: 50,

          /* name of the pool
             can be used to create different pools with elsewise identical options */
          name: 'my-pool',
        },
      },
      {
        loader: require.resolve('babel-loader'),
        options: {
          extends: path.resolve(__dirname, 'babelConfig.js'),
          cacheDirectory: true,

          // See #6846 for context on why cacheCompression is disabled
          cacheCompression: false,
          compact: utils.isProduction,
        },
      },
    ],
  },
];
