module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  overrides: [
    {
      env: {
        browser: true,
        node: true,
        es6: true,
        jest: true,
        'jest/globals': true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    eqeqeq: 'error',
    'no-console': 'warn',
    'prettier/prettier': 'error',
  },
  ignorePatterns: ['node_modules', 'build', 'dist', 'public'],
};
