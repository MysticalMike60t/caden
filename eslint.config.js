// eslint.config.js
const reactPlugin = require('eslint-plugin-react');

module.exports = [
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        // Define global variables here if needed
      }
    },
    plugins: {
      react: reactPlugin
    },
    rules: {
      'no-unused-vars': 'warn',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error'
    }
  }
];
