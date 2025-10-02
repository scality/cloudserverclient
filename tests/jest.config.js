module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts', '**/*.test.js'],
  setupFilesAfterEnv: ['<rootDir>/testSetup.ts'],
};
