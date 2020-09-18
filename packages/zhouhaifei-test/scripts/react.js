'use strict';

process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';

process.on('unhandledRejection', (err) => {
  throw err;
});

require('./utils/env');

const execSync = require('child_process').execSync;

let argv = process.argv.slice(2);

function isInGitRepository() {
  try {
    execSync('git rev-parse --is-inside-work-tree', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

function isInMercurialRepository() {
  try {
    execSync('hg --cwd . root', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

/*
if (
  !process.env.CI &&
  argv.indexOf('--watchAll') === -1 &&
  argv.indexOf('--watchAll=false') === -1
) {
  const hasSourceControl = isInGitRepository() || isInMercurialRepository();
  argv.push(hasSourceControl ? '--watch' : '--watchAll');
}
*/

const createJestConfig = require('./utils/createJestConfig');
const path = require('path');
// eslint-disable-next-line jest/no-jest-import
const jest = require('jest');
const paths = require('./utils/paths');

argv.push(
  '--config',
  JSON.stringify(
    createJestConfig(
      (relativePath) => path.resolve(__dirname, '..', relativePath),
      paths.appPath
    )
  )
);

const resolve = require('resolve');

function resolveJestDefaultEnvironment(name) {
  const jestDir = path.dirname(
    resolve.sync('jest', { basedir: __dirname })
  );
  const jestCLIDir = path.dirname(
    resolve.sync('jest-cli', { basedir: jestDir })
  );
  const jestConfigDir = path.dirname(
    resolve.sync('jest-config', { basedir: jestCLIDir })
  );
  return resolve.sync(name, { basedir: jestConfigDir });
}

const cleanArgv = [];
let env = 'jsdom';
let next;
do {
  next = argv.shift();
  if (next === '--env') {
    env = argv.shift();
  } else if (next.indexOf('--env=') === 0) {
    env = next.substring('--env='.length);
  } else {
    cleanArgv.push(next);
  }
} while (argv.length > 0);
argv = cleanArgv;
let resolvedEnv;
try {
  resolvedEnv = resolveJestDefaultEnvironment(`jest-environment-${env}`);
} catch (e) {
  // ignore
}
if (!resolvedEnv) {
  try {
    resolvedEnv = resolveJestDefaultEnvironment(env);
  } catch (e) {
    // ignore
  }
}
const testEnvironment = resolvedEnv || env;
argv.push('--env', testEnvironment);

jest.run(argv);
