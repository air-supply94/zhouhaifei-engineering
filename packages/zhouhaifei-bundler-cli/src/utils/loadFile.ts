import fs from 'fs';
import path from 'path';
import { build } from 'esbuild';
import { createRequire } from 'module';
import { cwd } from '../constants';
import url from 'url';

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
  if (isESM) {
    const fileBase = `${fileName}.timestamp-${Date.now()}-${Math.random().toString(16).slice(2)}`;
    const fileNameTmp = `${fileBase}.mjs`;
    const fileUrl = `${url.pathToFileURL(fileBase)}.mjs`;
    await fs.writeFileSync(fileNameTmp, bundledCode);
    try {
      return (await import(fileUrl)).default;
    } finally {
      fs.unlink(fileNameTmp, () => {});
    }
  } else {
    const extension = path.extname(fileName);

    const realFileName = await fs.promises.realpath(fileName);
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
