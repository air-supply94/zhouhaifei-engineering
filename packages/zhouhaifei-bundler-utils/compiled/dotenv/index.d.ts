/// <reference types="node" />

import type { URL as URL_2 } from 'node:url';

/**
 * Loads `.env` file contents into process.env by default. If `DOTENV_KEY` is present, it smartly attempts to load encrypted `.env.vault` file contents into process.env.
 *
 * See https://docs.dotenv.org
 *
 * @param options - additional options. example: `{ path: './custom/path', encoding: 'latin1', debug: true, override: false }`
 * @returns an object with a `parsed` key if successful or `error` key if an error occurred. example: { parsed: { KEY: 'value' } }
 *
 */
export declare function config(options?: DotenvConfigOptions): DotenvConfigOutput;

/**
 * Loads `.env` file contents into process.env.
 *
 * See https://docs.dotenv.org
 *
 * @param options - additional options. example: `{ path: './custom/path', encoding: 'latin1', debug: true, override: false }`
 * @returns an object with a `parsed` key if successful or `error` key if an error occurred. example: { parsed: { KEY: 'value' } }
 *
 */
export declare function configDotenv(options?: DotenvConfigOptions): DotenvConfigOutput;

/**
 * Decrypt ciphertext
 *
 * See https://docs.dotenv.org
 *
 * @param encrypted - the encrypted ciphertext string
 * @param keyStr - the decryption key string
 * @returns {string}
 *
 */
export declare function decrypt(encrypted: string, keyStr: string): string;

export declare interface DotenvConfigOptions {
    /**
     * Default: `path.resolve(process.cwd(), '.env')`
     *
     * Specify a custom path if your file containing environment variables is located elsewhere.
     *
     * example: `require('dotenv').config({ path: '/custom/path/to/.env' })`
     */
    path?: string | URL_2;

    /**
     * Default: `utf8`
     *
     * Specify the encoding of your file containing environment variables.
     *
     * example: `require('dotenv').config({ encoding: 'latin1' })`
     */
    encoding?: string;

    /**
     * Default: `false`
     *
     * Turn on logging to help debug why certain keys or values are not being set as you expect.
     *
     * example: `require('dotenv').config({ debug: process.env.DEBUG })`
     */
    debug?: boolean;

    /**
     * Default: `false`
     *
     * Override any environment variables that have already been set on your machine with values from your .env file.
     *
     * example: `require('dotenv').config({ override: true })`
     */
    override?: boolean;

    /**
     * Default: `process.env`
     *
     * Specify an object to write your secrets to. Defaults to process.env environment variables.
     *
     * example: `const processEnv = {}; require('dotenv').config({ processEnv: processEnv })`
     */
    processEnv?: DotenvPopulateInput;

    /**
     * Default: `undefined`
     *
     * Pass the DOTENV_KEY directly to config options. Defaults to looking for process.env.DOTENV_KEY environment variable. Note this only applies to decrypting .env.vault files. If passed as null or undefined, or not passed at all, dotenv falls back to its traditional job of parsing a .env file.
     *
     * example: `require('dotenv').config({ DOTENV_KEY: 'dotenv://:key_1234…@dotenv.org/vault/.env.vault?environment=production' })`
     */
    DOTENV_KEY?: string;
}

export declare interface DotenvConfigOutput {
    error?: Error;
    parsed?: DotenvParseOutput;
}

export declare interface DotenvParseOutput {
    [name: string]: string;
}

export declare interface DotenvPopulateInput {
    [name: string]: string;
}

export declare interface DotenvPopulateOptions {
    /**
     * Default: `false`
     *
     * Turn on logging to help debug why certain keys or values are not being set as you expect.
     *
     * example: `require('dotenv').config({ debug: process.env.DEBUG })`
     */
    debug?: boolean;

    /**
     * Default: `false`
     *
     * Override any environment variables that have already been set on your machine with values from your .env file.
     *
     * example: `require('dotenv').config({ override: true })`
     */
    override?: boolean;
}

export declare interface DotenvPopulateOutput {
    error?: Error;
}

/**
 * Parses a string or buffer in the .env file format into an object.
 *
 * See https://docs.dotenv.org
 *
 * @param src - contents to be parsed. example: `'DB_HOST=localhost'`
 * @param options - additional options. example: `{ debug: true }`
 * @returns an object with keys and values based on `src`. example: `{ DB_HOST : 'localhost' }`
 */
export declare function parse<T extends DotenvParseOutput = DotenvParseOutput>(
src: string | Buffer
): T;

/**
 * Loads `source` json contents into `target` like process.env.
 *
 * See https://docs.dotenv.org
 *
 * @param processEnv - the target JSON object. in most cases use process.env but you can also pass your own JSON object
 * @param parsed - the source JSON object
 * @param options - additional options. example: `{ debug: true, override: false }`
 * @returns {void}
 *
 */
export declare function populate(processEnv: DotenvPopulateInput, parsed: DotenvPopulateInput, options?: DotenvConfigOptions): DotenvPopulateOutput;

export { }
