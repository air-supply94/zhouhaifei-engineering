import type Config from 'webpack-5-chain';
import type webpack from 'webpack';
import type { Configuration } from 'webpack';
import type { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import type { ManifestPluginOptions } from 'webpack-manifest-plugin';
import type HtmlWebpackPlugin from 'html-webpack-plugin';
import type { ProxyConfigMap, ProxyConfigArray } from 'webpack-dev-server';

export namespace interfaces {

  export enum Env {
    development = 'development',
    production = 'production',
  }

  export interface CopyOptions {
    from: string;
    to: string;
  }

  export interface UserConfig {
    alias?: Record<string, string>;
    targets?: Record<string, any>;
    inlineLimit?: number;
    outputPath?: string;
    devtool?: Config.DevTool;
    publicPath?: string;
    define?: Record<string, any>;
    externals?: Configuration['externals'];
    preloadOptions?: false | Record<string, any>;
    forkTsCheckerOptions?: false | Record<string, any>;
    chainWebpack?: (
      memo: Config,
      args: {
        env: keyof typeof Env;
        webpack: typeof webpack;
      },
    ) => void | Promise<void>;
    analyze?: BundleAnalyzerPlugin.Options;
    manifestOptions?: ManifestPluginOptions;
    ignoreMomentLocale?: boolean;
    copy?: CopyOptions[] | string[];
    deadCode?: { directories?: string[]; exclude?: string[]; root?: string; };
    htmlOption?: false | HtmlWebpackPlugin.Options;
    svgr?: false | Record<string, any>;
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
    proxy?: ProxyConfigMap | ProxyConfigArray;
  }

  export interface ConfigOptions {
    cwd: string;
    entry: Record<string, string>;
    userConfig: UserConfig;
    env: Env;

    userEnv?: Record<string, string>;
    staticPathPrefix?: string;
    cache?: {
      buildDependencies?: string[];
      cacheDirectory?: string;
    };
    chainWebpack?: UserConfig['chainWebpack'];
    modifyWebpackConfig?: (
      memo: Configuration,
      args: {
        env: keyof typeof Env;
        webpack: typeof webpack;
      },
    ) => Configuration | Promise<Configuration>;
  }

  export type BuildOptions = {
    watch?: boolean;
  } & Omit<ConfigOptions, 'env'>;

  export type DevOptions = {
    port?: number;
    host?: string;
  } & Omit<ConfigOptions, 'env'>;

  export interface ApplyOptions {
    readonly config: Config;
    readonly browsers: string[];
    readonly env: ConfigOptions['env'];
    readonly cwd: ConfigOptions['cwd'];
    readonly userConfig: UserConfig;
    readonly staticPathPrefix: ConfigOptions['staticPathPrefix'];
    readonly isDevelopment: boolean;
    readonly isProduction: boolean;
    readonly srcDir: string;
    readonly publicDir: string;
  }
}
