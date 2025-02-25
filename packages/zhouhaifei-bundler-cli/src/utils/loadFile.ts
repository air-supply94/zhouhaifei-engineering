import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import url from 'node:url';
import { build } from 'esbuild';
import { cwd } from '../constants';

const _require = createRequire(cwd);

async function isEsmConfig(baseDir: string, configFileName: string): Promise<boolean> {
  if (/\.mjs$/.test(configFileName)) {
    return true;
  } else if (/\.cjs$/.test(configFileName)) {
    return false;
  } else {
    try {
      const pkgPath = path.resolve(baseDir, 'package.json');
      if (fs.existsSync(pkgPath)) {
        const pkg = await fs.promises.readFile(pkgPath, 'utf8');
        return JSON.parse(pkg).type === 'module';
      } else {
        return false;
      }
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}

async function loadConfigFromBundledFile(fileName: string, bundledCode: string, isESM: boolean): Promise<unknown> {
  const fileBase = `${fileName}.timestamp-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const fileNameTmp = `${fileBase}.${isESM ? 'mjs' : 'cjs'}`;
  await fs.promises.writeFile(fileNameTmp, bundledCode);

  try {
    if (isESM) {
      const fileUrl = `${url.pathToFileURL(fileBase)}.mjs`;
      return (await import(fileUrl)).default;
    } else {
      const raw = _require(fileNameTmp);
      return raw.__esModule ? raw.default : raw;
    }
  } finally {
    await fs.promises.unlink(fileNameTmp);
  }
}

export async function loadFile(filename: string): Promise<unknown> {
  if (!fs.existsSync(filename)) {
    return null;
  }

  const isEsm = await isEsmConfig(cwd, filename);
  const result = await build({
    absWorkingDir: cwd,
    entryPoints: [filename],
    outfile: 'out.js',
    write: false,
    target: ['node20'],
    platform: 'node',
    bundle: true,
    format: isEsm ? 'esm' : 'cjs',
    mainFields: ['main'],
    sourcemap: false,
    metafile: true,
  });

  return loadConfigFromBundledFile(filename, result.outputFiles[0].text, isEsm);
}
