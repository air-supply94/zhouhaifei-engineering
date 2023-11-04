import { Colors } from './types';

declare const picocolors: Colors & { createColors: (enabled?: boolean) => Colors };
export default picocolors;

export { }
