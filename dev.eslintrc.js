module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['react'],
    parserOptions: {
      project: './tsconfig.json',
      ecmaVersion: 2018,
      sourceType: 'module',
      ecmaFeatures: {
        "jsx": true
      }
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    },
    rules: {
      "no-console": 2,
      "no-alert": 2,
      "no-debugger": 2,
      "react/self-closing-comp": ["error", {
        "component": true,
        "html": true
      }]
    },
  }