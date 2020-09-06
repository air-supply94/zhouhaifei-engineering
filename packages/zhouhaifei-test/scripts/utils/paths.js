'use strict';

const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());

const moduleFileExtensions = [
  'web.mjs',
  'mjs',
  'web.js',
  'js',
  'web.ts',
  'ts',
  'web.tsx',
  'tsx',
  'json',
  'web.jsx',
  'jsx',
];

function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath);
}

function resolveModule(resolveFn, filePath) {
  const extension = moduleFileExtensions.find((extension) => fs.existsSync(resolveFn(`${filePath}.${extension}`)));

  if (extension) {
    return resolveFn(`${filePath}.${extension}`);
  }

  return resolveFn(`${filePath}.js`);
}

module.exports = {
  moduleFileExtensions,
  appPath: resolveApp('.'),
  testsSetup: resolveModule(resolveApp, 'tests/setup'),
  testsSetupAfterEnv: resolveModule(resolveApp, 'tests/setupAfterEnv'),
  appPackageJson: resolveApp('package.json'),

  dotenv: resolveApp('.env'),
};
