import fs from 'node:fs';
import path from 'node:path';

export function tryFiles(filenames: string[]): string | null {
  for (let i = 0; i < filenames.length; i++) {
    const filename = filenames[i];
    if (fs.existsSync(filename)) {
      return filename;
    }
  }

  return null;
}

export function resolveFile(rootDir: string, relativePath: string): string {
  return path.resolve(rootDir, relativePath);
}

export function resolveModule(
  resolveFn: (relativePath: string) => string,
  filename: string,
  extensions: string[],
): string {
  const extension = extensions.find((extension) => fs.existsSync(resolveFn(`${filename}${extension}`)));

  if (extension) {
    return resolveFn(`${filename}${extension}`);
  } else {
    return resolveFn(`${filename}.js`);
  }
}
