import { cac } from 'cac';
import fs from 'fs';
import path from 'path';
import { loadEnv } from './utils/loadEnv';

const cli = cac('zhouhaifei-react-script');
const { version } = JSON.parse(fs.readFileSync(path.resolve('../../package.json'), 'utf8')
  .toString());

// start
cli
  .command('[root]', 'start dev server')
  .alias('serve')
  .alias('dev')
  .alias('start')
  .action((root, options) => {
    process.env.BABEL_ENV = 'development';
    process.env.NODE_ENV = 'development';

    const env = loadEnv({
      cwd: process.cwd(),
      envFile: '.env',
    });
    console.log(env);

    // require('./scripts/start.js');
  });

// build
cli
  .command('build [root]', 'build for production')
  .action((root, options) => {
    process.env.BABEL_ENV = 'production';
    process.env.NODE_ENV = 'production';

    const env = loadEnv({
      cwd: process.cwd(),
      envFile: '.env',
    });
    console.log(env);

    // require('./scripts/build.js');
  });

cli.help();
cli.version(version);
cli.parse();
