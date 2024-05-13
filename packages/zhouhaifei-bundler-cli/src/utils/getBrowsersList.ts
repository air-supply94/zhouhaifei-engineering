import type { UserConfig } from '../types';

export function getBrowsersList(targets: UserConfig['targets']): string[] {
  return Object.keys(targets).map((key) => `${key} >= ${targets[key] === true ? '0' : targets[key]}`);
}
