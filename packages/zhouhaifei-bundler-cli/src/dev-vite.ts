import { config } from './config-vite/config';
import type { ViteDevOptions } from './types';
import { createServer } from 'vite';

export async function devVite({
  env,
  cwd,
  userConfig = {},
  userEnv,
}: ViteDevOptions) {
  const viteConfig = config({
    env,
    cwd,
    userConfig,
    userEnv,
  });

  const server = await createServer({
    ...viteConfig,
    configFile: false,
  });
  await server.listen();
  server.printUrls();
}
