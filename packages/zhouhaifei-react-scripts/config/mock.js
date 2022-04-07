const assert = require('assert');
const chalk = require('chalk');
const chokidar = require('chokidar');
const glob = require('glob');
const { pathToRegexp } = require('path-to-regexp');
const paths = require('./paths');

let cacheMockFile = [];

function parseFile() {
  cacheMockFile.forEach((file) => {
    delete require.cache[file];
  });
  cacheMockFile = glob.sync('**/_mock/*.{js,ts}', {
    cwd: paths.appSrc,
    realpath: true,
  });
  return cacheMockFile.reduce((prev, filePath) => {
    try {
      const value = require(filePath);
      if (typeof value === 'object' && value !== null) {
        return {
          ...prev,
          ...value,
        };
      } else {
        return prev;
      }
    } catch (e) {
      console.log(e);
      return prev;
    }
  }, {});
}

function parseKey(key) {
  let method = 'get';
  let path = key;

  if (key.indexOf(' ') > -1) {
    const item = key.split(' ');
    method = item[0].toLowerCase();
    path = item[1];
  }

  return {
    method,
    path,
  };
}

function parseValue(value) {
  return function(req, res) {
    if (typeof value === 'function') {
      return value(req, res);
    } else {
      return res.json(value);
    }
  };
}

function assertValue(key, value) {
  assert(
    typeof value === 'function' ||
    typeof value === 'object' ||
    typeof value === 'number' ||
    typeof value === 'boolean' ||
    typeof value === 'string',
    `mock value of ${key} should be function or object or string or number or boolean, but got ${typeof value}`
  );
}

let parsedRule = [];

function refreshConfig() {
  const config = parseFile();
  parsedRule = [];

  Object.keys(config).forEach((key) => {
    assertValue(key, config[key]);

    const { path, method } = parseKey(key);
    parsedRule.push({
      path,
      method,
      target: parseValue(config[key]),
    });
  });
}

function getMatchedRule(reqMethod, reqPath) {
  for (let i = 0; i < parsedRule.length; i++) {
    if (reqMethod.toLowerCase() === parsedRule[i].method) {
      const rulePath = parsedRule[i].path.replace(/\/$/, '');
      reqPath = reqPath.replace(/\/$/, '');
      if (reqPath === rulePath) {
        return parsedRule[i];
      }

      if (rulePath.includes(':') && pathToRegexp(rulePath).test(reqPath)) {
        return parsedRule[i];
      }
    }
  }
}

function mockMiddleware(devServer) {
  watchFile();
  refreshConfig();

  devServer.app.use((req, res, next) => {
    const matchItem = getMatchedRule(req.method, req.path);
    if (matchItem) {
      return matchItem.target(req, res);
    } else {
      return next();
    }
  });
}

function watchFile() {
  const watcher = chokidar.watch('**/_mock/*.{js,ts}', {
    cwd: paths.appSrc,
    ignoreInitial: true,
  });

  watcher.on('change', (path) => {
    console.log(chalk.green('CHANGED'), path.replace(paths.appPath, '.'));
    try {
      refreshConfig();
    } catch (e) {
      console.log(e);
    }
  });
}

module.exports = mockMiddleware;
