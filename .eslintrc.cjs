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
    '@stylistic',
    '@typescript-eslint',
    'simple-import-sort',
    'sort-destructure-keys',
    'typescript-sort-keys',
    'import-newlines',
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
    'import-newlines/enforce': ['error', {
      items: 5000,
      multiline: false,
    }],
    '@stylistic/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false,
      },
    }],
    '@stylistic/type-annotation-spacing': 'error',
    '@stylistic/type-generic-spacing': ['error'],
    '@stylistic/type-named-tuple-spacing': ['error'],
    'sort-destructure-keys/sort-destructure-keys': [2, {
      caseSensitive: false,
    }],
  },
};
