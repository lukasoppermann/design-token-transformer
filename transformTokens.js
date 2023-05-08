const StyleDictionary = require('style-dictionary')
const deepMerge = require("deepmerge");
const webConfig = require('./src/web/index.js')
const androidConfig = require("./src/android/index.js");

StyleDictionary.registerTransform({
  name: 'size/px',
  type: 'value',
  matcher: token => {
    return (token.unit === 'pixel' || token.type === 'dimension') && token.value !== 0
  },
  transformer: token => {
    return `${token.value}px`
  }
})

StyleDictionary.registerTransform({
  name: 'size/percent',
  type: 'value',
  matcher: token => {
    return token.unit === 'percent' && token.value !== 0
  },
  transformer: token => {
    return `${token.value}%`
  }
})

StyleDictionary.registerFilter({
  name: 'validToken',
  matcher: function(token) {
    return [
      "dimension",
      "string",
      "number",
      "color",
      "custom-spacing",
      "custom-gradient",
      "custom-fontStyle",
      "custom-radius",
      "custom-shadow",
    ].includes(token.type);
  }
})

const StyleDictionaryExtended = StyleDictionary.extend({
  ...deepMerge.all([androidConfig, webConfig]),
  source: ["tokens/*.json"],
  platforms: {
    scss: {
      transformGroup: "custom/css",
      buildPath: "build/scss/",
      files: [
        {
          destination: "_variables.scss",
          format: "scss/variables",
          filter: "validToken",
        },
      ],
    },
    less: {
      transformGroup: "custom/css",
      buildPath: "build/less/",
      files: [
        {
          destination: "_variables.less",
          format: "less/variables",
          filter: "validToken",
        },
      ],
    },
    css: {
      transformGroup: "custom/css",
      buildPath: "build/css/",
      files: [
        {
          destination: "_variables.css",
          format: "css/variables",
          filter: "validToken",
          options: {
            showFileHeader: false,
          },
        },
      ],
    },
    "json-flat": {
      transformGroup: "js",
      buildPath: "build/json/",
      files: [
        {
          destination: "styles.json",
          format: "json/flat",
          filter: "validToken",
        },
      ],
    },
    ios: {
      transformGroup: "ios",
      buildPath: "build/ios/",
      files: [
        {
          destination: "StyleDictionaryColor.h",
          format: "ios/colors.h",
          className: "StyleDictionaryColor",
          type: "StyleDictionaryColorName",
          filter: {
            type: "color",
          },
        },
        {
          destination: "StyleDictionaryColor.m",
          format: "ios/colors.m",
          className: "StyleDictionaryColor",
          type: "StyleDictionaryColorName",
          filter: {
            type: "color",
          },
        },
        {
          destination: "StyleDictionarySize.h",
          format: "ios/static.h",
          className: "StyleDictionarySize",
          type: "float",
          filter: {
            type: "number",
          },
        },
        {
          destination: "StyleDictionarySize.m",
          format: "ios/static.m",
          className: "StyleDictionarySize",
          type: "float",
          filter: {
            type: "number",
          },
        },
      ],
    },

    "ios-swift-separate-enums": {
      transformGroup: "ios-swift-separate",
      buildPath: "build/ios-swift/",
      files: [
        {
          destination: "StyleDictionaryColor.swift",
          format: "ios-swift/enum.swift",
          className: "StyleDictionaryColor",
          filter: {
            type: "color",
          },
        },
        {
          destination: "StyleDictionarySize.swift",
          format: "ios-swift/enum.swift",
          className: "StyleDictionarySize",
          type: "float",
          filter: {
            type: "number",
          },
        },
      ],
    },
  },
});
console.log('StyleDictionaryExtended', StyleDictionaryExtended)


StyleDictionaryExtended.buildAllPlatforms()
