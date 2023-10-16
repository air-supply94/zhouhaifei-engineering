import chalk from 'chalk';
import webpack from 'webpack';
import { paths } from '../config/paths';
import { utils } from '../config/utils';
import { webpackConfig } from '../config/webpack.config';

// Generate configuration
const config = webpackConfig();

function build() {
  const compiler = webpack(config);
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        console.error(err.stack || err);
        reject(err);
      } else {
        const info = stats.toJson();
        if (stats.hasErrors()) {
          console.error(info.errors);
          reject(info);
        } else {
          if (stats.hasWarnings()) {
            console.warn(info.warnings);
          }

          resolve(stats);
        }
      }
    });
  });
}

export default async function runBuild() {
  await build();

  console.log(chalk.green('Compiled successfully.\n'));

  console.log(chalk.green(`publicUrl: ${utils.publicUrlOrPath}`));
  console.log(chalk.green(`buildFolder: ${paths.appDist}`));
}

runBuild()
  .catch((err) => {
    console.log(err);
    console.log(chalk.red('Failed to compile.\n'));
    process.exit(1);
  });

