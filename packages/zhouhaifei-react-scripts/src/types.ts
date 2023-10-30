import type Config from 'webpack-5-chain';

export namespace interfaces {
  export enum Env {
    development = 'development',
    production = 'production',
  }

  export interface UserConfig {
    alias?: Record<string, string>;
    devtool?: boolean;
    analyze?: boolean;
  }

  export interface UserConfigInternal {
    userConfig: UserConfig;
    cwd: string;
    userEnv: Record<string, string | number>;
    env?: 'development' | 'production';
    config?: Config;
  }
}
