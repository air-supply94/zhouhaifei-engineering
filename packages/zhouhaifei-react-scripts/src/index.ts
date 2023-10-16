import { cac } from 'cac';
import fs from 'fs';
import path from 'path';
import { loadEnv } from './config/env';

const cli = cac('zhouhaifei-react-scripts');
const { version } = JSON.parse(fs.readFileSync(path.resolve('../../package.json'), 'utf8')
  .toString());

// start
cli
  .command('[root]', 'start dev server')
  .alias('serve')
  .alias('dev')
  .alias('start')
  .action(async(root, options) => {
    process.env.BABEL_ENV = 'development';
    process.env.NODE_ENV = 'development';

    loadEnv({
      cwd: process.cwd(),
      envFile: '.env',
    });

    await import('./scripts/start.js');
  });

// build
cli
  .command('build [root]', 'build for production')
  .action(async(root, options) => {
    process.env.BABEL_ENV = 'production';
    process.env.NODE_ENV = 'production';

    loadEnv({
      cwd: process.cwd(),
      envFile: '.env',
    });

    await import('./scripts/build.js');
  });

cli.help();
cli.version(version);
cli.parse();
