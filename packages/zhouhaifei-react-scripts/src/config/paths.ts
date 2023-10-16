import fs from 'fs';
import path from 'path';

const appDirectory = fs.realpathSync(process.cwd());

function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath);
}

function resolveModule(resolveFn, filePath) {
  const extension = moduleFileExtensions.find((extension) => fs.existsSync(resolveFn(`${filePath}.${extension}`)));

  if (extension) {
    return resolveFn(`${filePath}.${extension}`);
  } else {
    return resolveFn(`${filePath}.js`);
  }
}

export const moduleFileExtensions = [
  'mjs',
  'js',
  'jsx',
  'ts',
  'tsx',
  'json',
];

export const paths = {
  configFile: resolveApp('config/config.js'),
  dotenv: resolveApp('.env'),
  appPath: resolveApp('.'),
  appDist: resolveApp('dist'),
  appPublic: resolveApp('public'),
  appIndexJs: resolveModule(resolveApp, 'src/index'),
  appIndexHtml: resolveApp('public/index.html'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  appTsConfig: resolveApp('tsconfig.json'),
  appJsConfig: resolveApp('jsconfig.json'),
  yarnLockFile: resolveApp('yarn.lock'),
  proxySetup: resolveModule(resolveApp, 'src/setupProxy'),
  appNodeModules: resolveApp('node_modules'),
  appWebpackCache: resolveApp('.cache'),
};

