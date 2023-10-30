import fs from 'fs';
import path from 'path';

export const moduleFileExtensions: string[] = [
  '.ts',
  '.tsx',
  '.js',
  '.jsx',
  '.mjs',
  '.cjs',
  '.json',
  '.wasm',
];

function resolveApp(relativePath: string): string {
  return path.resolve(process.cwd(), relativePath);
}

function resolveModule(resolveFn: (relativePath: string) => string, filePath: string): string {
  const extension = moduleFileExtensions.find((extension) => fs.existsSync(resolveFn(`${filePath}${extension}`)));

  if (extension) {
    return resolveFn(`${filePath}${extension}`);
  } else {
    return resolveFn(`${filePath}.js`);
  }
}

export const paths = {
  dotenv: resolveApp('.env'),
  appPath: resolveApp('.'),
  appDist: resolveApp('dist'),
  appPublic: resolveApp('public'),
  appEntryJs: resolveModule(resolveApp, 'src/index'),
  appEntryHtml: resolveApp('public/index.html'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  appTsConfig: resolveApp('tsconfig.json'),
  yarnLockFile: resolveApp('yarn.lock'),
  proxySetup: resolveModule(resolveApp, 'src/setupProxy'),
  appNodeModules: resolveApp('node_modules'),
  appWebpackCache: resolveApp('.cache'),
};
