const config = {
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.d.ts', '!**/node_modules/**', '!**/index.ts'],
  coveragePathIgnorePatterns: [
    '<rootDir>/.next',
    '<rootDir>/pages',
    '<rootDir>/jest.config.js',
    '<rootDir>/next.config.js',
  ],

  moduleNameMapper: {
    /* Handle image imports
    https://jestjs.io/docs/webpack#handling-static-assets */
    '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',

    // For resolve path aliases
    '@api/(.*)$': '<rootDir>/api/$1',
    '@components/(.*)$': '<rootDir>/components/$1',
    '@utils/(.*)$': '<rootDir>/utils/$1',
    '@hooks/(.*)$': '<rootDir>/hooks/$1',
    '@pages/(.*)$': '<rootDir>/pages/$1',
    '@styles/(.*)$': '<rootDir>/styles/$1',
    '@interfaces/(.*)$': '<rootDir>/interfaces/$1',
    '@store/(.*)$': '<rootDir>/store/$1',
  },

  testPathIgnorePatterns: [
    '<rootDir>/.next',
    '<rootDir>/pages',
    '<rootDir>/jest.config.js',
    '<rootDir>/next.config.js',
  ],

  testEnvironment: 'jsdom',

  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
    https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },

  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],

  coverageThreshold: {
    global: {
      lines: 90,
      statements: 90,
      branches: 85,
      functions: 85,
    },
  },
}

module.exports = config
