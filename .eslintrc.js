module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: "babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: [
        "@babel/preset-react"
      ]
    },
    sourceType: "module"
  },
};
