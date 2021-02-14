import type { Config } from '@jest/types';

/**
 * Jest configuration
 * See https://jestjs.io/docs/en/configuration.html#options for options documentation
 */
const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  displayName: {
    name: 'Root Library',
    color: 'green'
  }
};

export default config;