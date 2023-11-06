import {defineConfig} from 'father';

export default defineConfig({
  extends: '../../.fatherrc.base.ts',
  prebundle: {
    deps: [
      '@babel/core',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-decorators',
      '@babel/plugin-proposal-do-expressions',
      '@babel/plugin-proposal-duplicate-named-capturing-groups-regex',
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-proposal-function-bind',
      '@babel/plugin-proposal-function-sent',
      '@babel/plugin-proposal-partial-application',
      '@babel/plugin-proposal-pipeline-operator',
      '@babel/plugin-proposal-private-methods',
      '@babel/plugin-proposal-private-property-in-object',
      '@babel/plugin-proposal-record-and-tuple',
      '@babel/plugin-proposal-throw-expressions',
      '@babel/plugin-transform-runtime',
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript',
      'babel-plugin-import',
    ],
  }
});
