'use strict';

const fs = require('fs');
const path = require('path');
const resolve = require('resolve');
const paths = require('./paths');

/**
 * Get webpack aliases based on the baseUrl of a compilerOptions object.
 *
 * @param {*} options
 */
function getWebpackAliases(options = {}) {
  const baseUrl = options.baseUrl;

  if (!baseUrl) {
    return {};
  }

  const baseUrlResolved = path.resolve(paths.appPath, baseUrl);

  if (path.relative(paths.appPath, baseUrlResolved) === '') {
    return { '@': paths.appSrc };
  }
}

function getModules() {
  // Check if TypeScript is setup
  const hasTsConfig = fs.existsSync(paths.appTsConfig);
  const hasJsConfig = fs.existsSync(paths.appJsConfig);

  if (hasTsConfig && hasJsConfig) {
    throw new Error(
      'You have both a tsconfig.json and a jsconfig.json. If you are using TypeScript please remove your jsconfig.json file.'
    );
  }

  let config;

  /* If there's a tsconfig.json we assume it's a
     TypeScript project and set up the config
     based on tsconfig.json */
  if (hasTsConfig) {
    const ts = require(resolve.sync('typescript', { basedir: paths.appNodeModules }));
    config = ts.readConfigFile(paths.appTsConfig, ts.sys.readFile).config;

    /* Otherwise we'll check if there is jsconfig.json
       for non TS projects. */
  } else if (hasJsConfig) {
    config = require(paths.appJsConfig);
  }

  config = config || {};
  const options = config.compilerOptions || {};

  return { webpackAliases: getWebpackAliases(options) };
}

module.exports = getModules();
