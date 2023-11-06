import { Plugin as Plugin_2 } from 'vite';

export declare function AndDesignVueResolve(): Lib;

export declare function AntdResolve(): Lib;

export declare type ChangeCaseType = 'camelCase' | 'capitalCase' | 'constantCase' | 'dotCase' | 'headerCase' | 'noCase' | 'paramCase' | 'pascalCase' | 'pathCase' | 'sentenceCase' | 'snakeCase';

export declare function createStyleImportPlugin(options: VitePluginOptions): Plugin_2;

export declare function ElementPlusResolve(): Lib;

export declare function getChangeCaseFileName(importedName: string, libraryNameChangeCase: LibraryNameChangeCase): string;

export declare interface Lib {
    importTest?: RegExp;
    /**
     * Dependent library name
     */
    libraryName: string;
    /**
     * When the imported style file does not end with .css, it needs to be turned on
     * @default: false
     */
    esModule?: boolean;
    /**
     * Custom imported component style conversion
     */
    resolveStyle?: (name: string) => string;
    /**
     * There may be some component libraries that are not very standardized.
     * You can turn on this to ignore to determine whether the file exists. Prevent errors when importing non-existent css files.
     * Performance may be slightly reduced after it is turned on, but the impact is not significant
     * @default: false
     */
    ensureStyleFile?: boolean;
    /**
     * Customize imported component file name style conversion
     * @default: paramCase
     */
    libraryNameChangeCase?: LibraryNameChangeCase;
    /**
     * Whether to introduce base style
     */
    base?: string;
}

export declare type LibraryNameChangeCase = ChangeCaseType | ((name: string) => string);

export declare function NutuiResolve(): Lib;

export declare type RegOptions = string | RegExp | (string | RegExp)[] | null | undefined;

export declare interface Source {
    opts: {
        libs: Lib[];
        cacheDir: string;
    };
}

export declare function transformImportVar(importStr: string): readonly string[];

export declare function VantResolve(): Lib;

export declare interface VitePluginOptions {
    include?: RegOptions;
    exclude?: RegOptions;
    /**
     * @default process.cwd()
     * @deprecated 1.2.0 is obsolete
     */
    root?: string;
    libs?: Lib[];
    resolves?: Lib[];
}

export declare function VxeTableResolve(): Lib;

export { }
