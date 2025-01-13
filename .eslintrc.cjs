module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  plugins: ['prettier', 'eslint'],
  extends: [
    'eslint:recommended',
    'react-app',
    'prettier',
  ],
  ignorePatterns: ['build', '.eslintrc.cjs'],
  rules: {
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/no-static-element-interactions': ['error'],
    'no-duplicate-imports': ['error'],
    'no-extra-boolean-cast': 'off',
    'no-useless-escape': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    curly: ['error', 'all'],
  },
};
