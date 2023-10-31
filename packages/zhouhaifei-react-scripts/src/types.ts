import type Config from 'webpack-5-chain';
import type webpack from 'webpack';
import type { Configuration } from 'webpack';
import type { Options as HPMOptions } from 'http-proxy-middleware';
import type { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import type { ManifestPluginOptions } from 'webpack-manifest-plugin';
import type HtmlWebpackPlugin from 'html-webpack-plugin';

type HPMFnArgs = Parameters<NonNullable<HPMOptions['onProxyReq']>>;

export namespace interfaces {
  export interface ProxyOptions extends HPMOptions {
    target?: string;
    context?: string | string[];
    bypass?: (
      ...args: [HPMFnArgs[1], HPMFnArgs[2], HPMFnArgs[3]]
    ) => string | boolean | null | void;
  }

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
    define?: {[key: string]: any; };
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

    autoCSSModules?: boolean;
    lessLoader?: {[key: string]: any; };
    proxy?: {[key: string]: ProxyOptions; } | ProxyOptions[];
  }

  export interface ConfigOptions {
    cwd: string;
    entry: Record<string, string>;
    userConfig: UserConfig;
    env: Env;

    userEnv?: Record<string, string | number>;
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
    clean?: boolean;
    watch?: boolean;
  } & Omit<ConfigOptions, 'env'>;

  export type DevOptions = {
    afterMiddlewares?: any[];
    beforeMiddlewares?: any[];
    port?: number;
    host?: string;
    ip?: string;
    onBeforeMiddleware?: (...args: any[]) => any;
  } & Omit<ConfigOptions, 'env'>;

  export interface ApplyOptions {
    readonly config: Config;
    readonly browsers: UserConfig['targets'];
    readonly env: ConfigOptions['env'];
    readonly cwd: ConfigOptions['cwd'];
    readonly userConfig: UserConfig;
    readonly staticPathPrefix: ConfigOptions['staticPathPrefix'];
  }
}
