import { cac } from 'cac';
import fs from 'fs';
import { interfaces } from './types';
import { version } from './utils/constants';
import { loadEnv } from './utils/loadEnv';
import { loadFile } from './utils/loadFile';
import { start } from './start';
import { build } from './build';
import { resolveFile, resolveModule } from './utils/lookupFile';

console.log(version, 'version');
const cli = cac('zhouhaifei-react-script');
const cwd = fs.realpathSync(process.cwd());
const userConfigFile = resolveModule(resolveFile.bind(null, cwd), '.reactScriptsConfig', [
  '.ts',
  '.js',
]);

// start
cli
  .command('[root]', 'start dev server')
  .alias('dev')
  .alias('start')
  .action(async(root, options) => {
    const env = interfaces.Env.development;
    process.env.BABEL_ENV = env;
    process.env.NODE_ENV = env;

    const userEnv = loadEnv(cwd, '.env') || {};
    const userConfig: interfaces.UserConfig = await loadFile(userConfigFile);
    await start({
      userConfig,
      cwd,
      userEnv,
    });
  });

// build
cli
  .command('build [root]', 'build for production')
  .action(async(root, options) => {
    const env = interfaces.Env.production;
    process.env.BABEL_ENV = env;
    process.env.NODE_ENV = env;

    const userEnv = loadEnv(cwd, '.env');
    const userConfig: interfaces.UserConfig = await loadFile(userConfigFile);
    await build({
      userConfig,
      cwd,
      userEnv,
    });
  });

cli.help();
cli.version(version);
cli.parse();
