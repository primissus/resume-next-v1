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
};

module.exports = createJestConfig(config);
