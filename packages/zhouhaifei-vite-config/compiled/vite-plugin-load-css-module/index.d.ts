import { Plugin as Plugin_2 } from 'vite';

declare function loadCssModuleFile(options: LoadCssModuleFileOptions): Plugin_2;
export default loadCssModuleFile;

export declare interface LoadCssModuleFileOptions {
    include: (id: string) => boolean;
}

export { }
