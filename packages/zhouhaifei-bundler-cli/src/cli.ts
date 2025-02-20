import path from 'node:path';
import cac from 'cac';
import { build } from './build';
import { DEFAULT_SRC_DIR, USER_CONFIG_FILE, cwd, version } from './constants';
import { dev } from './dev';
import type { UserConfig, cliOptions } from './types';
import { Env } from './types';
import { initUserConfig, loadEnv, loadFile, resolveFile, resolveModule } from './utils';

const cli = cac('zhouhaifei-bundler-cli');

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const entryFile =
  resolveModule(resolveFile.bind(null, cwd), `${DEFAULT_SRC_DIR}/index`, extensions) ||
  resolveModule(resolveFile.bind(null, cwd), 'index', extensions);
const entry = { [path.basename(entryFile, path.extname(entryFile))]: entryFile };

cli.option('-c, --config [config]', 'your config file');

// dev
cli
  .command('dev [root]', 'start dev server')
  .option('--port [port]', 'your port')
  .option('--host [host]', 'your host')
  .option('--open [open]', 'open browser')
  .option('--vite [vite]', 'vite strat your application')
  .action(async (_root, options: cliOptions) => {
    process.env.NODE_ENV = Env.development;

    const userEnv = loadEnv(cwd, '.env') || {};
    const userConfig: UserConfig =
      (await loadFile(options?.config ? path.resolve(cwd, options.config) : USER_CONFIG_FILE)) || {};
    initUserConfig(userConfig, {
      open: options.open,
      port: options?.port,
      host: options?.host,
    });

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
  .option('--watch [watch]', 'watch file')
  .action(async (_root, options: cliOptions) => {
    process.env.NODE_ENV = Env.production;

    const userEnv = loadEnv(cwd, '.env');
    const userConfig: UserConfig =
      (await loadFile(options?.config ? path.resolve(cwd, options.config) : USER_CONFIG_FILE)) || {};
    initUserConfig(userConfig, { watch: options?.watch });

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
