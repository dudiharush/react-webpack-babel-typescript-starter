module.exports = {
  rootDir: '../',
  roots: ['<rootDir>/src/'],
  coveragePathIgnorePatterns: ['<rootDir>/cypress/'],
  transform: {
      '^.+\\.tsx?$': 'babel-jest',
  },
  setupFiles: ['<rootDir>/config/jest.setup.ts'],
  setupFilesAfterEnv: ['<rootDir>/config/testing-library.setup.ts'],
  moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
          '<rootDir>/__mocks__/jest/fileMock.js',
      '\\.(css|less)$': '<rootDir>/__mocks__/jest/styleMock.js',
  },
};