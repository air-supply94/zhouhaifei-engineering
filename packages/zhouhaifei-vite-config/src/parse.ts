import { existsSync } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';
import { build } from 'esbuild';
import { pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const _require = createRequire(import.meta.url);

function getConfigFilename(
  baseDir: string,
  defaultConfigFiles: LoadConfigFromFile['defaultConfigFiles']
): string {
  for (let i = 0; i < defaultConfigFiles.length; i++) {
    const filename = path.resolve(baseDir, defaultConfigFiles[i]);
    if (existsSync(filename)) {
      return filename;
    }
  }

  return null;
}

export interface LoadConfigFromFile {
  baseDir?: string;
  defaultConfigFiles: string[];
}

async function isEsmConfig(baseDir: string, configFileName: string): Promise<boolean> {
  if (/\.m[jt]s$/.test(configFileName)) {
    return true;
  } else if (/\.c[jt]s$/.test(configFileName)) {
    return false;
  } else {
    try {
      const pkgPath = path.resolve(baseDir, 'package.json');
      if (existsSync(pkgPath)) {
        const pkg = await fs.readFile(pkgPath, 'utf8');
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

export async function loadConfigFile(options: LoadConfigFromFile): Promise<unknown> {
  const baseDir: string = options.baseDir ? options.baseDir : process.cwd();
  const defaultConfigFile = getConfigFilename(baseDir, options.defaultConfigFiles);
  if (!defaultConfigFile) {
    return null;
  }

  const isEsm = await isEsmConfig(baseDir, defaultConfigFile);
  const result = await build({
    absWorkingDir: process.cwd(),
    entryPoints: [defaultConfigFile],
    outfile: 'out.js',
    write: false,
    target: [
      'node14.18',
      'node16',
    ],
    platform: 'node',
    bundle: true,
    format: isEsm ? 'esm' : 'cjs',
    mainFields: ['main'],
    sourcemap: false,
    metafile: true,
  });

  return loadConfigFromBundledFile(defaultConfigFile, result.outputFiles[0].text, isEsm);
}

async function loadConfigFromBundledFile(
  fileName: string,
  bundledCode: string,
  isESM: boolean
): Promise<any> {
  if (isESM) {
    const fileBase = `${fileName}.timestamp-${Date.now()}-${Math.random()
      .toString(16)
      .slice(2)}`;
    const fileNameTmp = `${fileBase}.mjs`;
    const fileUrl = `${pathToFileURL(fileBase)}.mjs`;
    await fs.writeFile(fileNameTmp, bundledCode);
    try {
      const result = await import(fileUrl);
      return result.default;
    } finally {
      await fs.unlink(fileNameTmp);
    }
  } else {
    const extension = path.extname(fileName);

    const realFileName = await fs.realpath(fileName);
    const loaderExt = extension in _require.extensions ? extension : '.js';
    const defaultLoader = _require.extensions[loaderExt]!;
    _require.extensions[loaderExt] = (module: NodeModule, filename: string) => {
      if (filename === realFileName) {
        (module as any)._compile(bundledCode, filename);
      } else {
        defaultLoader(module, filename);
      }
    };

    // clear cache
    delete _require.cache[_require.resolve(fileName)];
    const raw = _require(fileName);
    _require.extensions[loaderExt] = defaultLoader;
    return raw.__esModule ? raw.default : raw;
  }
}
