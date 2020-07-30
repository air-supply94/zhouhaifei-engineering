const assert = require('assert');
const path = require('path');
const bodyParser = require('body-parser');
const chokidar = require('chokidar');
const glob = require('glob');
const chalk = require('react-dev-utils/chalk');
const paths = require('./paths');

let cacheRoutePath = [];
let cacheMockPath = [];

function getConfig() {
  cacheMockPath.forEach((file) => {
    delete require.cache[file];
  });
  cacheMockPath = glob.sync('**/_mock/*.{js,ts}', {
    cwd: paths.appSrc,
    realpath: true,
  });
  return cacheMockPath.reduce((prev, filePath) => ({
    ...prev,
    ...require(filePath),
  }), {});
}

function createMockHandler(method, path, value) {
  return function mockHandler(...args) {
    const res = args[1];
    if (typeof value === 'function') {
      value(...args);
    } else {
      res.json(value);
    }
  };
}

function watchFile(devServer) {
  const watcher = chokidar.watch('**/_mock/*.{js,ts}', {
    cwd: paths.appSrc,
    ignoreInitial: true,
  });

  watcher.on('change', (path) => {
    console.log(chalk.green('CHANGED'), path.replace(paths.appPath, '.'));
    try {
      realApplyMock(devServer);
    } catch (e) {
      console.log(e);
    }
  });
}

function applyMock(devServer) {
  try {
    devServer.use(bodyParser.json({
      limit: '5mb',
      strict: false,
    }));

    devServer.use(
      bodyParser.urlencoded({
        extended: true,
        limit: '5mb',
      })
    );

    realApplyMock(devServer);
    watchFile(devServer);
  } catch (e) {
    console.log(e);
  }
}

function realApplyMock(devServer) {
  const config = getConfig();
  const { app } = devServer;

  const mockRules = [];

  Object.keys(config).forEach((key) => {
    const keyParsed = parseKey(key);
    assert(Boolean(app[keyParsed.method]), `method of ${key} is not valid`);
    assert(
      typeof config[key] === 'function' ||
      typeof config[key] === 'object' ||
      typeof config[key] === 'number' ||
      typeof config[key] === 'boolean' ||
      typeof config[key] === 'string',
      `mock value of ${key} should be function or object or string or number or boolean, but got ${typeof config[
        key
      ]}`
    );

    let value = config[key];

    if (
      typeof value === 'object' &&
      Object.hasOwnProperty.call(value, 'disabled') &&
      Object.hasOwnProperty.call(value, 'value')
    ) {
      if (value.disabled !== true) {
        value = value.value;
      } else {
        return;
      }
    }

    mockRules.push({
      path: path.resolve(keyParsed.path, '.'),
      method: keyParsed.method,
      target: value,
    });
  });

  app._router.stack = app._router.stack.filter((item) => !(item.route && typeof item.route.path === 'string' && cacheRoutePath.includes(item.route.path)));

  cacheRoutePath = mockRules.map((item) => item.path);

  mockRules.forEach((mock) => {
    app[mock.method](
      mock.path,
      createMockHandler(mock.method, mock.path, mock.target)
    );
  });
}

function parseKey(key) {
  let method = 'get';
  let path = key;

  if (key.indexOf(' ') > -1) {
    const splited = key.split(' ');
    method = splited[0].toLowerCase();
    path = splited[1];
  }

  return {
    method,
    path,
  };
}

module.exports = applyMock;
