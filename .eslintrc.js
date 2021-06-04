module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['eslint-plugin-import', '@typescript-eslint', 'react-hooks','react'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    project: ['./tsconfig.json', 'cypress/tsconfig.json'],
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      { selector: 'enum', format: ['StrictPascalCase'] },
      { selector: 'enumMember', format: ['PascalCase'] }
    ]
  },
}