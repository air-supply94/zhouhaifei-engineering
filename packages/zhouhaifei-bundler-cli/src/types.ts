import type { BabelConfigOptions } from '@zhouhaifei/babel-preset';
import type { PostcssConfigOptions } from '@zhouhaifei/postcss-preset';
import type { CssNanoOptions } from 'css-minimizer-webpack-plugin';
import type { TransformOptions as EsbuildOptions } from 'esbuild';
import type HtmlWebpackPlugin from 'html-webpack-plugin';
import type webpack from 'webpack';
import type Config from 'webpack-5-chain';
import type { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import type { ProxyConfigArray } from 'webpack-dev-server';
import type { ManifestPluginOptions } from 'webpack-manifest-plugin';

export enum Env {
  development = 'development',
  production = 'production',
}

export enum Transpiler {
  babel = 'babel',
  esbuild = 'esbuild',
  none = 'none',
}

export enum JSMinifier {
  terser = 'terser',
  esbuild = 'esbuild',
  none = 'none',
}

export enum CSSMinifier {
  esbuild = 'esbuild',
  cssnano = 'cssnano',
  none = 'none',
}

export interface CopyOptions {
  from: string;
  to: string;
}

export enum CodeSplit {
  default = 'default',
  depPerChunk = 'depPerChunk',
  granularChunks = 'granularChunks',
}

interface BaseConfig {
  transpiler?: keyof typeof Transpiler;
  esbuildLoaderOptions?: Record<string, any>;
  babelLoaderOptions?: Record<string, any>;
  extraJsModuleIncludes?: Array<string | RegExp>;
  publicDir?: string;
  open?: boolean;
  port?: number;
  host?: string;
  proxy?: ProxyConfigArray;
  cache?: {
    buildDependencies?: string[];
    cacheDirectory?: string;
  };
  alias?: Record<string, string>;
  targets?: Record<'chrome' | 'edge' | 'safari' | 'firefox', string | number>;
  assetsInlineLimit?: number;
  outputPath?: string;
  publicPath?: string;
  define?: Record<string, any>;
  externals?: Record<string, string>;
  watch?: boolean;
  staticPathPrefix?: string;
  reactRefresh?: boolean;
  processEnvPrefix?: RegExp;
}

interface StyleConfig {
  autoCSSModules?: boolean;
  lessOptions?: Record<string, any>;
  sassOptions?: Record<string, any>;
  stylusOptions?: Record<string, any>;
  styleLoaderOptions?: false | Record<string, any>;
  cssLoaderModules?: Record<string, any>;
  cssLoaderOptions?: Record<string, any>;

  postcssPresetEnvOptions?: PostcssConfigOptions['postcssPresetEnvOptions'];
  autoprefixer?: PostcssConfigOptions['autoprefixer'];
  extraPostCSSPlugins?: PostcssConfigOptions['extraPostCSSPlugins'];
  postcssOptions?: PostcssConfigOptions['postcssOptions'];
  enableTailwindcss?: PostcssConfigOptions['enableTailwindcss'];
}

export interface UserConfig extends BaseConfig, StyleConfig, BabelConfigOptions {
  nocompress?: boolean;
  jsMinifier?: keyof typeof JSMinifier;
  jsMinifierOptions?: EsbuildOptions | any;
  cssMinifier?: keyof typeof CSSMinifier;
  cssMinifierOptions?: EsbuildOptions | CssNanoOptions | Record<string, any>;
  codeSplitting?: keyof typeof CodeSplit;
  sourcemap?: Config.DevTool;
  preloadOptions?: false | Record<string, any>;
  forkTsCheckerOptions?: false | Record<string, any>;
  chainWebpack?: (
    memo: Config,
    args: {
      env: keyof typeof Env;
      webpack: typeof webpack;
    },
  ) => void | Promise<void>;
  analyzer?: BundleAnalyzerPlugin.Options;
  analyzerPort?: number;
  manifestOptions?: false | ManifestPluginOptions;
  ignoreMomentLocale?: boolean;
  copy?: CopyOptions[] | string[];
  deadCode?: { directories?: string[]; exclude?: string[]; root?: string };
  htmlOption?: false | HtmlWebpackPlugin.Options;
}

export interface ConfigOptions {
  cwd: string;
  entry: Record<string, string>;
  userConfig: UserConfig;
  env: Env;
  userEnv?: Record<string, string>;
}

export type BuildOptions = Omit<ConfigOptions, 'env'>;

export type DevOptions = Omit<ConfigOptions, 'env'>;

export interface ApplyOptions {
  readonly config: Config;
  readonly env: ConfigOptions['env'];
  readonly cwd: ConfigOptions['cwd'];
  readonly userConfig: UserConfig;
  readonly isDevelopment: boolean;
  readonly srcDir: string;
}

export interface cliOptions {
  config?: string;
  port?: string;
  host?: string;
  watch?: boolean;
  open?: boolean;
}
