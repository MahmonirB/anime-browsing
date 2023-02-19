module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'graphql'],
  files: ["*.ts", "*.tsx"],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-undef': 'off',
    'graphql/template-strings': ['error', {
      env: 'apollo',
      schemaJson: require('./graphql-schema.json'),
    }],
    'graphql/named-operations': ['warn', {
      schemaJson: require('./graphql-schema.json'),
    }],
  },
};
