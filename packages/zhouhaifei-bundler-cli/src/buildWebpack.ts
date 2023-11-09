import webpack from 'webpack';
import { config } from './configWebpack/config';
import type { WebpackBuildOptions } from './types';
import { Env } from './types';
import chalk from 'chalk';

export async function buildWebpack({
  userConfig = {},
  ...rest
}: WebpackBuildOptions) {
  const { watch } = userConfig;
  const webpackConfig = await config({
    ...rest,
    userConfig,
    env: Env.production,
  });

  return new Promise((resolve, reject) => {
    const compiler = webpack(webpackConfig);
    const handler: Parameters<typeof compiler.run>[0] = (err, stats) => {
      // generate valid error from normal error and stats error
      const validErr = err || (stats?.hasErrors() ? new Error(stats!.toString('errors-only')) : null);

      if (validErr) {
        // try to catch esbuild minify error to output  friendly error message
        stats?.hasErrors() && esbuildCompressErrorHelper(validErr.toString());
        reject(validErr);
      } else {
        resolve(stats!);
      }

      // close compiler after normal build
      if (!watch) {
        compiler.close(() => {
          //
        });
      }
    };

    // handle watch mode
    if (watch) {
      const watching = compiler.watch(
        webpackConfig.watchOptions || {},
        handler
      );

      watching.close.bind(watching);
    } else {
      compiler.run(handler);
    }
  });
}

function esbuildCompressErrorHelper(errorMsg: string) {
  if (typeof errorMsg !== 'string') {
    return;
  }

  if (
    // https://github.com/evanw/esbuild/blob/a5f781ecd5edeb3fb6ae8d1045507ab850462614/internal/js_parser/js_parser_lower.go#L18
    errorMsg.includes('configured target environment') &&
    errorMsg.includes('es2015')
  ) {
    const terserRecommend = {
      label: chalk.green('change jsMinifier'),
      details: chalk.cyan('  jsMinifier: \'terser\''),
    };
    const upgradeTargetRecommend = {
      label: chalk.green('upgrade target'),
      details: chalk.cyan(`  jsMinifierOptions: {
    target: ['chrome80', 'es2020']
  }`),
    };
    const ieRecommend = { details: 'P.S. compatible with legacy browsers: https://umijs.org/blog/legacy-browser' };
    console.log();
    console.log(chalk.bgRed(' COMPRESSION ERROR '));
    console.log(
      chalk.yellow(
        `esbuild minify failed, please ${terserRecommend.label} or ${upgradeTargetRecommend.label}:`
      )
    );
    console.log('e.g. ');
    console.log(terserRecommend.details);
    console.log('   or');
    console.log(upgradeTargetRecommend.details);
    console.log(ieRecommend.details);
    console.log();
  }
}
