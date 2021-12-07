const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  transform: {
    '^.+\\.vue$': 'vue3-jest',
    ...tsjPreset.transform,
  },
};
