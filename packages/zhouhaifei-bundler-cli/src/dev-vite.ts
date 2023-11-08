import { config } from './config-vite/config';
import type { ViteDevOptions } from './types';
import { createServer } from 'vite';

export async function devVite({
  port,
  host,
  env,
  cwd,
  userConfig = {},
  userEnv,
  entryFile,
}: ViteDevOptions) {
  host = host || process.env.HOST || '0.0.0.0';
  port = port || parseInt(process.env.PORT, 10) || 3000;
  const viteConfig = config({
    port,
    host,
    env,
    cwd,
    userConfig,
    userEnv,
    entryFile,
  });

  const server = await createServer({
    ...viteConfig,
    configFile: false,
  });
  await server.listen();
  server.printUrls();
}
