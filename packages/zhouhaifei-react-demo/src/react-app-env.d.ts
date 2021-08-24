declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly PUBLIC_URL: string;
  }
}

declare module '*.bmp';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.webp';
declare module '*.svg';

declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.module.css';
declare module '*.module.less';
declare module '*.module.scss';
