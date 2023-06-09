/* eslint-disable @typescript-eslint/no-var-requires */
const pak = require('./package.json');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'react-native-reanimated/plugin',
      {
        globals: ['__example_plugin', '__example_plugin_swift'],
      }
    ]
  ],
};

