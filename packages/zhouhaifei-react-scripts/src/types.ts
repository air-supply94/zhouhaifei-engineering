import type Config from 'webpack-5-chain';
import type webpack from 'webpack';
import type { Configuration } from 'webpack';
import type { Options as HPMOptions } from 'http-proxy-middleware';
import type { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

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
    devtool?: Config.DevTool;
    analyze?: BundleAnalyzerPlugin.Options;
    cache?: {
      absNodeModulesPath?: string;
      buildDependencies?: string[];
      cacheDirectory?: string;
    };
    autoCSSModules?: boolean;
    chainWebpack?: (
      memo: Config,
      args: {
        env: keyof typeof Env;
        webpack: typeof webpack;
      },
    ) => void;
    copy?: CopyOptions[] | string[];
    define?: {[key: string]: any; };
    externals?: Configuration['externals'];
    ignoreMomentLocale?: boolean;
    lessLoader?: {[key: string]: any; };
    outputPath?: string;
    proxy?: {[key: string]: ProxyOptions; } | ProxyOptions[];
    publicPath?: string;
    targets?: {[key: string]: any; };
  }

  export interface ConfigOptions {
    cwd: string;
    env: Env;
    entry: Record<string, string>;
    userConfig: UserConfig;
    userEnv?: Record<string, string | number>;
  }

  export type BuildOptions = {
    cwd: string;
    entry: Record<string, string>;
    userConfig: UserConfig;

    clean?: boolean;
    watch?: boolean;
  } & Pick<ConfigOptions, 'userEnv'>;

  export type DevOptions = {
    cwd: string;
    entry: Record<string, string>;
    userConfig: UserConfig;

    afterMiddlewares?: any[];
    beforeMiddlewares?: any[];
    port?: number;
    host?: string;
    ip?: string;
    onBeforeMiddleware?: (...args: any[]) => any;
  } & Pick<ConfigOptions, 'userEnv'>;
}
