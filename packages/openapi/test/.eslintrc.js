// eslint-disable-next-line import/no-commonjs
module.exports = {
  root: true,
  extends: ['@modern-js-app', '../../../.base-eslint'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['../tsconfig.json'],
  },
  rules: {
    'import/no-commonjs': 0,
  },
};
