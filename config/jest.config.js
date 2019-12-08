module.exports = {
    "rootDir": "../",
    "roots": [
      "<rootDir>/src/"
    ],
    "transform": {
      "^.+\\.tsx?$": "babel-jest"
    },
    "setupFiles": ["<rootDir>/config/jest.setup.ts"],
    "setupFilesAfterEnv": [
      "<rootDir>/config/testing-library.setup.ts"
    ]
  }