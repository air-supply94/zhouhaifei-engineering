declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production';
    readonly CLI_TOOL: 'webpack' | 'vite';
    readonly PUBLIC_URL: string;
    readonly REACT_APP_OSS: string;
  }
}

// images
declare module '*.svg'
declare module '*.bmp';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.webp';
declare module '*.svg';
declare module '*.ico';

// styles
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.styl';
declare module '*.stylus'

declare module '*.mp4';
declare module '*.webm';
declare module '*.ogg';
declare module '*.mp3';
declare module '*.wav';
declare module '*.flac';
declare module '*.aac';
declare module '*.opus';

// fonts
declare module '*.woff';
declare module '*.woff2';
declare module '*.eot';
declare module '*.ttf';
declare module '*.otf';

// other
declare module '*.webmanifest';
declare module '*.pdf';
declare module '*.txt';
