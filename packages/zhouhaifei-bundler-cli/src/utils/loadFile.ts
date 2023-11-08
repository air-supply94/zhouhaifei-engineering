import fs from 'fs';
import path from 'path';
import { build } from 'esbuild';
import { createRequire } from 'module';

const _require = createRequire(process.cwd());

/* async function isEsmConfig(baseDir: string, configFileName: string): Promise<boolean> {
  if (/\.m[jt]s$/.test(configFileName)) {
    return true;
  } else if (/\.c[jt]s$/.test(configFileName)) {
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
}*/

async function loadConfigFromBundledFile(
  fileName: string,
  bundledCode: string,
  isESM: boolean
): Promise<unknown> {
  if (isESM) {
    const fileBase = path.resolve(path.dirname(fileName), `${Date.now()}-${Math.random()
      .toString(16)
      .slice(2)}`);
    const fileNameTmp = `${fileBase}.mjs`;
    await fs.promises.writeFile(fileNameTmp, bundledCode);
    try {
      const result = await import(fileNameTmp);
      return result.default;
    } finally {
      await fs.promises.unlink(fileNameTmp);
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

  const isEsm = false;
  const result = await build({
    absWorkingDir: process.cwd(),
    entryPoints: [filename],
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

  return loadConfigFromBundledFile(filename, result.outputFiles[0].text, isEsm);
}

