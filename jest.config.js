module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.ts', '**/tests/**/*.test.js'],
  rootDir: '.',
  modulePathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/dist/'],
  moduleNameMapper: {
    '^@scality/cloudserverclient$': '<rootDir>/src/index.ts',
  },
  forceExit: true,
  detectOpenHandles: true,
};
