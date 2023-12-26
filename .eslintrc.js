module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    './codestyle/lint/prettier',
    './codestyle/lint/initial',
    './codestyle/lint/typescript',
    './codestyle/lint/import',
    './codestyle/lint/react',
  ],
  ignorePatterns: ['dist', '.eslintrc.js'],
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
};
