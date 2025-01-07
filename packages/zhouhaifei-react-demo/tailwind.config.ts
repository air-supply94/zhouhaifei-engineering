import type { Config } from 'tailwindcss';

const unit = 'px';
const remUnit = 16;
const end = 400;
const space: Record<string | number, string> = {
  '0': `0${unit}`,
  px: `1${unit}`,
};
for (let i = 2; i <= end; i += 2) {
  space[i / 4] = `${i / remUnit}rem`;
}

const fontSize: Record<string, string> = {};
const lineHeight: Record<string, string> = {
  '0': `0${unit}`,
  '1': '1',
};
for (let i = 10; i <= 200; i += 2) {
  fontSize[i] = `${i / remUnit}rem`;
  lineHeight[i * 1.5] = `${(i * 1.5) / remUnit}rem`;
}

export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      success: 'var(--ant-color-success)',
      error: 'var(--ant-color-error)',
      warning: 'var(--ant-color-warning)',
      bg: 'var(--ant-color-bg-layout)',
      divide: 'var(--ant-color-border)',
      primary: 'var(--ant-color-primary)',
      // text-标题色
      heading: 'var(--ant-color-text-base)',
      // text-正常色
      normal: '#6E6E71',
      // text-二级色
      secondary: '#848B9E',
      white: '#fff',
      transparent: 'transparent',
      black: '#000',
    },
    spacing: space,
    borderRadius: space,
    fontWeight: {
      400: '400',
      500: '500',
      600: '600',
      700: '700',
      800: '800',
      900: '900',
    },
    fontSize,
    lineHeight,
  },
  corePlugins: { preflight: true },
} as Config;
