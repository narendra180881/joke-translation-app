/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "@swc/jest",
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ['/home/narendra180881/joke-translation-app/src/app/jest.setup.ts'],
};
