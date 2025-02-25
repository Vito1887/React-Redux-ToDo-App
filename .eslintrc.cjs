module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: ['build', '.eslintrc.cjs'],
  rules: {
    '@typescript-eslint/ban-types': ['error', { types: { '{}': false } }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'jsx-a11y/anchor-is-valid': 'off',
    'no-duplicate-imports': ['error'],
    'no-extra-boolean-cast': 'off',
    'no-useless-escape': 'off',
    curly: ['error', 'all'],
  },
};
