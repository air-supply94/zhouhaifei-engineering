import { DEFAULT_ESBUILD_TARGET_KEYS } from '../constants';
import type { UserConfig } from '../types';

export function getEsBuildTarget(targets: UserConfig['targets']): string[] {
  return Object.keys(targets)
    .filter((key) => DEFAULT_ESBUILD_TARGET_KEYS.includes(key))
    .map((key) => `${key}${targets[key] === true ? '0' : targets[key]}`);
}
