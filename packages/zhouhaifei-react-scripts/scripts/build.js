'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

process.on('unhandledRejection', (err) => {
  throw err;
});

// Ensure environment variables are read.
require('../config/env');

const path = require('path');
const chalk = require('chalk');
const fs = require('fs-extra');
const webpack = require('webpack');
const paths = require('../config/paths');
const utils = require('../config/utils');
const configFactory = require('../config/webpack.config');
const checkBrowsers = require('../react-dev-utils/browsersHelper');
const checkRequiredFiles = require('../react-dev-utils/checkRequiredFiles');
const FileSizeReporter = require('../react-dev-utils/FileSizeReporter');
const printHostingInstructions = require('../react-dev-utils/printHostingInstructions');

const measureFileSizesBeforeBuild = FileSizeReporter.measureFileSizesBeforeBuild;
const printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild;
const useYarn = fs.existsSync(paths.yarnLockFile);

// These sizes are pretty large. We'll warn for bundles exceeding them.
const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024;
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024;

// Warn and crash if required files are missing
if (!checkRequiredFiles([paths.appIndexJs])) {
  process.exit(1);
}

// Generate configuration
const config = configFactory();

function build() {
  const compiler = webpack(config);
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        console.error(err.stack || err);
        if (err.details) {
          console.error(err.details);
        }

        reject(new Error(err));
      } else {
        const info = stats.toJson();
        if (stats.hasErrors()) {
          console.error(info.errors);
          reject(new Error(info.errors));
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

async function deploy() {
  await checkBrowsers(paths.appPath);
  const previousFileSizes = await measureFileSizesBeforeBuild(paths.appDist);
  const stats = await build();

  console.log(chalk.green('Compiled successfully.\n'));

  console.log('File sizes after gzip:\n');
  printFileSizesAfterBuild(
    stats,
    previousFileSizes,
    paths.appDist,
    WARN_AFTER_BUNDLE_GZIP_SIZE,
    WARN_AFTER_CHUNK_GZIP_SIZE
  );
  console.log();

  const appPackage = require(paths.appPackageJson);
  const publicUrl = utils.publicUrlOrPath;
  const publicPath = config.output.publicPath;
  const buildFolder = path.relative(process.cwd(), paths.appDist);
  printHostingInstructions(
    appPackage,
    publicUrl,
    publicPath,
    buildFolder,
    useYarn
  );
}

deploy().catch((err) => {
  console.log(err);
  console.log(chalk.red('Failed to compile.\n'));
  process.exit(1);
});

