module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  plugins: ['react'],
  settings: {
    react: {
      version: '^16.0.0',
    },
  },
};
