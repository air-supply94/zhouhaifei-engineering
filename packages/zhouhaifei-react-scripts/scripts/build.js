'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

/*
 * Makes the script crash on unhandled rejections instead of silently
 * ignoring them. In the future, promise rejections that are not handled will
 * terminate the Node.js process with a non-zero exit code.
 */
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
const { checkBrowsers } = require('../react-dev-utils/browsersHelper');
const checkRequiredFiles = require('../react-dev-utils/checkRequiredFiles');
const FileSizeReporter = require('../react-dev-utils/FileSizeReporter');
const printHostingInstructions = require('../react-dev-utils/printHostingInstructions');

const measureFileSizesBeforeBuild = FileSizeReporter.measureFileSizesBeforeBuild;
const printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild;
const useYarn = fs.existsSync(paths.yarnLockFile);

// These sizes are pretty large. We'll warn for bundles exceeding them.
const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024;
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024;

const isInteractive = process.stdout.isTTY;

// Warn and crash if required files are missing
if (!checkRequiredFiles([paths.appIndexJs])) {
  process.exit(1);
}

// Generate configuration
const config = configFactory();

/*
 * We require that you explicitly set browsers and do not fall back to
 * browserslist defaults.
 */

checkBrowsers(paths.appPath, isInteractive).then(() => {
  /*
   * First, read the current file sizes in build directory.
   * This lets us display how much they changed later.
   */
  return measureFileSizesBeforeBuild(paths.appDist);
})
  .then((previousFileSizes) => {
    return build(previousFileSizes);
  })
  .then(
    ({ stats, previousFileSizes }) => {
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
  )
  .catch((err) => {
    console.log(chalk.red('Failed to compile.\n'));
    process.exit(1);
  });

// Create the production build and print the deployment instructions.
function build(previousFileSizes) {
  /*
   * We used to support resolving modules according to `NODE_PATH`.
   * This now has been deprecated in favor of jsconfig/tsconfig.json
   * This lets you use absolute paths in imports inside large monorepos:
   */
  if (process.env.NODE_PATH) {
    console.log(
      chalk.yellow(
        'Setting NODE_PATH to resolve modules absolutely has been deprecated in favor of setting baseUrl in jsconfig.json (or tsconfig.json if you are using TypeScript) and will be removed in a future major release of create-react-app.'
      )
    );
    console.log();
  }

  console.log('Creating an optimized production build...');

  const compiler = webpack(config);
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        console.error(err.stack || err);
        if (err.details) {
          console.error(err.details);
        }

        reject(new Error(err));
        return;
      }

      const info = stats.toJson();
      if (stats.hasErrors()) {
        console.error(info.errors);
        reject(new Error(info.errors));
        return;
      }

      if (stats.hasWarnings()) {
        console.warn(info.warnings);
      }

      return resolve({
        stats,
        previousFileSizes,
      });
    });
  });
}
