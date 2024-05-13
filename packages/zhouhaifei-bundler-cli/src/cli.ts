import cac from 'cac';
import path from 'path';
import { build } from './build';
import { cwd, DEFAULT_CONFIG_NAME, DEFAULT_SRC_DIR, version } from './constants';
import { dev } from './dev';
import type { cliOptions, UserConfig } from './types';
import { Env } from './types';
import { loadEnv, loadFile, resolveFile, resolveModule, tryFiles, initUserConfig } from './utils';

const cli = cac('zhouhaifei-bundler-cli');

const userConfigFile = tryFiles([path.resolve(cwd, `${DEFAULT_CONFIG_NAME}.ts`), path.resolve(cwd, `${DEFAULT_CONFIG_NAME}.js`)]);

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const entryFile = resolveModule(resolveFile.bind(null, cwd), `${DEFAULT_SRC_DIR}/index`, extensions) || resolveModule(resolveFile.bind(null, cwd), 'index', extensions);
const entry = { [path.basename(entryFile, path.extname(entryFile))]: entryFile };

cli.option('-c, --config [config]', 'your config file');

// dev
cli
  .command('dev [root]', 'start dev server')
  .option('--port [port]', 'your port')
  .option('--host [host]', 'your host')
  .option('--open [open]', 'open browser')
  .option('--vite [vite]', 'vite strat your application')
  .action(async (root, options: cliOptions) => {
    process.env.NODE_ENV = Env.development;

    const userEnv = loadEnv(cwd, '.env') || {};
    const userConfig: UserConfig = (await loadFile(options?.config ? path.resolve(cwd, options.config) : userConfigFile)) || {};
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
  .action(async (root, options: cliOptions) => {
    process.env.NODE_ENV = Env.production;

    const userEnv = loadEnv(cwd, '.env');
    const userConfig: UserConfig = (await loadFile(options?.config ? path.resolve(cwd, options.config) : userConfigFile)) || {};
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
