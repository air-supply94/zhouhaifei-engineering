import { cac } from 'cac';
import fs from 'fs';
import path from 'path';
import { interfaces } from './types';
import { version } from './utils/constants';
import { loadEnv } from './utils/loadEnv';
import { loadFile } from './utils/loadFile';
import { dev } from './dev';
import { build } from './build';
import { resolveFile, resolveModule, tryFiles } from './utils/lookupFile';

const cli = cac('zhouhaifei-react-script');
const cwd = fs.realpathSync(process.cwd());
const userConfigFile = resolveModule(resolveFile.bind(null, cwd), '.reactScriptsConfig', [
  '.ts',
  '.js',
]);

const entryFile = tryFiles([
  path.join(cwd, 'src/index.tsx'),
  path.join(cwd, 'src/index.ts'),
  path.join(cwd, 'index.tsx'),
  path.join(cwd, 'index.ts'),
]);
const entry = { [path.basename(entryFile, path.extname(entryFile))]: entryFile };

// start
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
