module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.eslint.json',
  },
  plugins: [
    '@typescript-eslint',
    'simple-import-sort',
    'typescript-sort-keys',
  ],
  rules: {
    'max-len': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'object-curly-newline': 'off',
    'typescript-sort-keys/interface': ['error', 'asc', {
      caseSensitive: false,
      natural: true,
      requiredFirst: false,
    }],
    'typescript-sort-keys/string-enum': ['error', 'asc', {
      caseSensitive: false,
      natural: true,
    }],
  },
};
