declare function vitePluginRequireTransform(params?: VitePluginRequireTransformParamsType): {
    name: string;
    transform(code: string, id: string): Promise<{
        code: any;
        map: any;
    }>;
};
export default vitePluginRequireTransform;

declare type VitePluginRequireTransformParamsType = {
    /** Filter files that should enter the plugin */
    fileRegex?: RegExp;
    /** Prefix for created import variable names */
    importPrefix?: string;
    /** Function to convert the require path to the import variable name */
    importPathHandler?: Function;
};

export { }
