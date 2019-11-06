module.exports = {
    "roots": [
      "<rootDir>/src"
    ],
    "transform": {
      "^.+\\.tsx?$": "babel-jest"
    },
    "setupFilesAfterEnv": [
      "<rootDir>/config/jest.setup.ts"
    ]
  }