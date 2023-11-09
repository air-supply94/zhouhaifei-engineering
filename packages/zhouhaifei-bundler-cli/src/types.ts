import type Config from 'webpack-5-chain';
import type webpack from 'webpack';
import type { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import type { ManifestPluginOptions } from 'webpack-manifest-plugin';
import type HtmlWebpackPlugin from 'html-webpack-plugin';
import type { ProxyConfigMap } from 'webpack-dev-server';
import type { GenerateBabelConfigOptions } from '@zhouhaifei/babel-preset';
import type { TransformOptions as EsbuildOptions } from 'esbuild';
import type { MinifyOptions as TerserOptions } from 'terser';
import type { CssNanoOptions } from 'css-minimizer-webpack-plugin';
import type { UserConfig as ViteUserConfig } from 'vite';

export enum CliTool {
  vite = 'vite',
  webpack = 'webpack',
}

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

export interface UserConfig extends GenerateBabelConfigOptions {
  cache?: {
    buildDependencies?: string[];
    cacheDirectory?: string;
  };
  transpiler?: keyof typeof Transpiler;
  jsMinifier?: keyof typeof JSMinifier;
  cssMinifier?: keyof typeof CSSMinifier;
  jsMinifierOptions?: EsbuildOptions | TerserOptions;
  cssMinifierOptions?: EsbuildOptions | CssNanoOptions | Record<string, any>;
  esbuildLoaderOptions?: EsbuildOptions;
  threadLoaderOptions?: Record<string, any>;
  codeSplitting?: keyof typeof CodeSplit;
  alias?: Record<string, string>;
  targets?: Record<'chrome' | 'edge' | 'safari' | 'firefox', string | number>;
  inlineLimit?: number;
  outputPath?: string;
  devtool?: Config.DevTool;
  publicPath?: string;
  define?: Record<string, any>;
  externals?: Record<string, { root?: string; commonjs?: string; commonjs2?: string; amd?: string; }>;
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
  nocompress?: boolean;
  manifestOptions?: ManifestPluginOptions;
  ignoreMomentLocale?: boolean;
  copy?: CopyOptions[] | string[];
  deadCode?: { directories?: string[]; exclude?: string[]; root?: string; };
  htmlOption?: false | HtmlWebpackPlugin.Options;
  svgr?: false | Record<string, any>;
  antd?: {
    libraryName?: 'antd' | 'antd-mobile';
    import?: boolean;
    momentPicker?: boolean;
  };
  lessLoaderOptions?: Record<string, any>;
  sassLoaderOptions?: Record<string, any>;
  stylusLoaderOptions?: Record<string, any>;
  autoCSSModules?: boolean;
  styleLoaderOptions?: false | Record<string, any>;
  cssLoaderModules?: Record<string, any>;
  cssLoaderOptions?: Record<string, any>;
  postcssLoaderOptions?: Record<string, any>;
  autoprefixer?: Record<string, any>;
  extraPostCSSPlugins?: any[];
  proxy?: ProxyConfigMap;
  reactRefresh?: boolean;
  babelLoaderOptions?: Record<string, any>;
  staticPathPrefix?: string;
  vite?: ViteUserConfig;
  open?: boolean;
  port?: number;
  host?: string;
  watch?: boolean;
}

export interface AAA extends GenerateBabelConfigOptions {
  svgr?: false | Record<string, any>;

  lessLoaderOptions?: Record<string, any>;
  sassLoaderOptions?: Record<string, any>;
  stylusLoaderOptions?: Record<string, any>;
  autoCSSModules?: boolean;
  postcssLoaderOptions?: Record<string, any>;
  autoprefixer?: Record<string, any>;
  extraPostCSSPlugins?: any[];
}

export interface WebpackConfigOptions {
  cwd: string;
  entry: Record<string, string>;
  userConfig: UserConfig;
  env: Env;
  userEnv?: Record<string, string>;
}

export type WebpackBuildOptions = Omit<WebpackConfigOptions, 'env'>;

export type WebpackDevOptions = Omit<WebpackConfigOptions, 'env'>;

export interface WebpackApplyOptions {
  readonly config: Config;
  readonly env: WebpackConfigOptions['env'];
  readonly cwd: WebpackConfigOptions['cwd'];
  readonly userConfig: UserConfig;
  readonly isDevelopment: boolean;
  readonly isProduction: boolean;
  readonly srcDir: string;
  readonly publicDir: string;
}

export interface ViteDevOptions {
  readonly cwd: WebpackConfigOptions['cwd'];
  readonly userConfig: UserConfig;
  readonly env: Env;
  readonly userEnv?: WebpackConfigOptions['userEnv'];
}

export interface cliOptions {
  config?: string;
  port?: string;
  host?: string;
  watch?: boolean;
  open?: boolean;
  vite?: boolean;
}
