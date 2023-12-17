const nextJest = require('next/jest');

const createJestConfig = nextJest({
    dir: './',
});

/** @type {import('jest').Config} */
const config = {
    // preset: 'ts-jest',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    maxWorkers: 6,
    testMatch: [
        '**/tests/**/*.(spec|test).[jt]s?(x)',
        '**/?(*.)+(spec|test).[jt]s?(x)',
    ],
    coverageReporters: ['html', 'text'],
    moduleNameMapper: {
        '^@assets(.*)$': '<rootDir>/assets$1',
        '^@app(.*)$': '<rootDir>/src/app$1',
        '^@components(.*)$': '<rootDir>/src/components$1',
        '^@constants(.*)$': '<rootDir>/src/constants$1',
        '^@server(.*)$': '<rootDir>/src/server$1',
        '^@type(.*)$': '<rootDir>/src/types$1',
        '^@lib(.*)$': '<rootDir>/src/lib$1',
        '^@hooks(.*)$': '<rootDir>/src/hooks$1',
        '^@src(.*)$': '<rootDir>/src$1',
    },
};

module.exports = createJestConfig(config);
