import type { UserConfig } from 'vite';
import { mergeConfig } from 'vite';
import { getDefaultViteConfig } from '@zhouhaifei/vite-config';

const userConfig: UserConfig = { server: { proxy: require('./src/setupProxy') }};
export default mergeConfig(
  getDefaultViteConfig({ useCreateStyleImportPlugin: false }),
  userConfig
);
