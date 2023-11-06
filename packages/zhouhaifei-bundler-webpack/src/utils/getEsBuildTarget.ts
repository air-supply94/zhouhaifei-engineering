import { DEFAULT_ESBUILD_TARGET_KEYS } from '../constants';
import type { interfaces } from '../types';

export function getEsBuildTarget(targets: interfaces.UserConfig['targets']): string[] {
  return Object.keys(targets)
    .filter((key) => DEFAULT_ESBUILD_TARGET_KEYS.includes(key))
    .map((key) => {
      return `${key}${targets[key] === true ? '0' : targets[key]}`;
    });
}