import type { interfaces } from '../types';

export function getBrowsersList({ targets }: interfaces.UserConfig['targets']): string[] {
  return (
    targets.browsers ||
    Object.keys(targets).map((key) => {
      return `${key} >= ${targets[key] === true ? '0' : targets[key]}`;
    })
  );
}
