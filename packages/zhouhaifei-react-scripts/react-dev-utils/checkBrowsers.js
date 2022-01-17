'use strict';

const os = require('os');
const browserslist = require('browserslist');
const chalk = require('chalk');

module.exports = function checkBrowsers(dir) {
  const current = browserslist.loadConfig({ path: dir });
  if (current != null) {
    return Promise.resolve(current);
  } else {
    return Promise.reject(
      new Error(
        `${chalk.red('you must specify targeted browsers.') +
        os.EOL
        }Please add a ${chalk.underline(
          'browserslist'
        )} key to your ${chalk.bold('package.json')}.`
      )
    );
  }
};
