import { cac } from 'cac';
import fs from 'fs';
import path from 'path';
import { DEFAULT_CONFIG_NAME, version } from './constants';
import { interfaces } from './types';
import { loadEnv } from './utils/loadEnv';
import { loadFile } from './utils/loadFile';
import { dev } from './dev';
import { build } from './build';
import { resolveFile, resolveModule, tryFiles } from './utils/lookupFile';

const cli = cac('zhouhaifei-bundler-webpack');
const cwd = fs.realpathSync(process.cwd());
const userConfigFile = tryFiles([
  path.resolve(cwd, `${DEFAULT_CONFIG_NAME }.ts`),
  path.resolve(cwd, `${DEFAULT_CONFIG_NAME }.js`),
]);

const extensions = [
  '.js',
  '.jsx',
  '.ts',
  '.tsx',
];

const entryFile = resolveModule(resolveFile.bind(null, cwd), 'src/index', extensions) || resolveModule(resolveFile.bind(null, cwd), 'index', extensions);
const entry = { [`${path.basename(entryFile, path.extname(entryFile))}`]: entryFile };

// dev
cli
  .command('[root]', 'start dev server')
  .alias('dev')
  .alias('start')
  .action(async(root, options) => {
    process.env.NODE_ENV = interfaces.Env.development;

    const userEnv = loadEnv(cwd, '.env') || {};
    const userConfig: interfaces.UserConfig = await loadFile(userConfigFile);
    await dev({
      userConfig,
      cwd,
      userEnv,
      entry,
    });
  });

// build
cli
  .command('build [root]', 'build for production')
  .action(async(root, options) => {
    process.env.NODE_ENV = interfaces.Env.production;

    const userEnv = loadEnv(cwd, '.env');
    const userConfig: interfaces.UserConfig = await loadFile(userConfigFile);

    await build({
      userConfig,
      cwd,
      userEnv,
      entry,
    });
  });

cli.help();
cli.version(version);
cli.parse();
