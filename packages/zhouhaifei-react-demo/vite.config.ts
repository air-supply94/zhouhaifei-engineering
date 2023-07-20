import { mergeConfig } from 'vite';
import { proxy } from './proxy';
import { getDefaultViteConfig } from '@zhouhaifei/vite-config';

export default mergeConfig(
  getDefaultViteConfig({ useCreateStyleImportPlugin: false }),
  { server: { proxy }}, false
);
