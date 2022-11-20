// eslint-disable-next-line no-undef
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      // eslint-disable-next-line no-undef
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        root: ['./src'],
        alias: {
          '_components': '/components',
          '_assets': '/assets',
          '_navigation': '/navigation',
          '_screens': '/screens'
        }
      }
    ],
    'jest-hoist'
  ]
};
