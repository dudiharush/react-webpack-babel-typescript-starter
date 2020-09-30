module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'cypress'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    "plugin:cypress/recommended"
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "@typescript-eslint/no-unused-vars": "off"
  },
}