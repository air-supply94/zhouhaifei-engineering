import type { UserConfig } from 'vite';
import { mergeConfig } from 'vite';
import { getDefaultViteConfig } from '@zhouhaifei/vite-config';
import proxyConfig from './src/setupProxy';

const userConfig: UserConfig = { server: { proxy: proxyConfig }};
export default mergeConfig(
  getDefaultViteConfig({ useCreateStyleImportPlugin: false }),
  userConfig
);
