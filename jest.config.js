/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "jsdom",
  preset: "ts-jest",
  setupFilesAfterEnv: ['../joke-translator-app/src/app/jest.setup.ts'],
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
};