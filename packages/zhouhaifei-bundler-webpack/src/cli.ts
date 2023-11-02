import fs from 'fs';
import path from 'path';
import { DEFAULT_CONFIG_NAME, version } from './constants';
import { interfaces } from './types';
import { loadEnv, loadFile, resolveFile, resolveModule, tryFiles } from '@zhouhaifei/bundler-utils';
import { dev } from './dev';
import { build } from './build';
import cac from '@zhouhaifei/bundler-utils/compiled/cac';

interface cliData {
  config?: string;
  port?: string;
  host?: string;
}

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

cli.option('-c, --config [config]', 'your config file');

// dev
cli
  .command('dev [root]', 'start dev server')
  .alias('dev')
  .alias('start')
  .option('--port [port]', 'your port')
  .option('--host [host]', 'your host')
  .action(async(root, options: cliData) => {
    process.env.NODE_ENV = interfaces.Env.development;

    const userEnv = loadEnv(cwd, '.env') || {};
    const userConfig: interfaces.UserConfig = await loadFile(options?.config ? path.resolve(cwd, options.config) : userConfigFile) || {};
    await dev({
      userConfig,
      cwd,
      userEnv,
      entry,
      host: options?.host,
      port: options?.port ? parseInt(options.port, 10) : undefined,
    });
  });

// build
cli
  .command('build [root]', 'build for production')
  .action(async(root, options: cliData) => {
    process.env.NODE_ENV = interfaces.Env.production;

    const userEnv = loadEnv(cwd, '.env');
    const userConfig: interfaces.UserConfig = await loadFile(options?.config ? path.resolve(cwd, options.config) : userConfigFile) || {};

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
