// eslint.config.js
module.exports = [
    {
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          },
          ecmaVersion: 12,
          sourceType: 'module'
        },
        globals: {
          // Define global variables here if needed
        }
      },
      plugins: ['react'],
      rules: {
        // Add or override rules here
      }
    },
    {
      // Add or merge other configurations directly here if needed
      // e.g., eslint:recommended, plugin:react/recommended
    }
  ];
  