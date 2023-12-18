const StyleDictionary = require('style-dictionary')
const deepMerge = require("deepmerge");
const webConfig = require('./src/web/index.js')
const androidConfig = require("./src/android/index.js");
//const iosConfig = require("./src/ios/index.js");

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

const _ = require('lodash');

const { fileHeader } = StyleDictionary.formatHelpers;

StyleDictionary.registerFilter({
  name: 'isIHLight',
  matcher: function(token) {
    return token.attributes.category === 'semantic_color' && token.type === "color" && token.attributes.type == "ih-light"
  }
});

StyleDictionary.registerFilter({
  name: 'isIHDark',
  matcher: function(token) {
    return token.attributes.category === 'semantic_color' && token.type === "color" && token.attributes.type == "ih-dark"
  }
});


StyleDictionary.registerFormat({
  name: `ih-ios-color-base`,
  formatter: function({dictionary, file, options}) {
    return fileHeader({file}) + 
    `import SwiftUI\n\n` + 
    `// swiftlint:disable all\n` +
    `public struct AnatomyColors {\n` +
    dictionary.allTokens.map(token => {
        return `\tpublic let ${_.camelCase(token.path.slice(2, token.path.length).join(" "))}: Color;`
    }).join("\n")
    + `\n}\n`;
  }
});


StyleDictionary.registerFormat({
  name: `ih-ios-color-definitions`,
  formatter: function({dictionary, file, options}) {
    return fileHeader({file}) + 
    `import SwiftUI\n\n` + 
    `// swiftlint:disable all\n` +
    `extension AnatomyColors {\n` +
    `\tpublic static let ${options.type} = AnatomyColors(\n` +
    dictionary.allTokens.map(token => {
        return `\t\t${_.camelCase(token.path.slice(2, token.path.length).join(" "))}: Color(hex: "${token.value}")!`
    }).join(",\n")
    + `\n\t)\n}\n`;
  }
});

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
      buildPath: "build/ios/",
      transformGroup: "ios-swift-separate",
      files: [
        {
          destination: "AnatomyColors.swift",
          format: "ih-ios-color-base",
          filter: "isIHLight"
        },
        {
          destination: "IncludedHealthLightColors.swift",
          format: "ih-ios-color-definitions",
          options: {
            type: "ihLight"
          },
          filter: "isIHLight"
        },
        {
          destination: "IncludedHealthDarkColors.swift",
          format: "ih-ios-color-definitions",
          options: {
            type: "ihDark"
          },
          filter: "isIHDark"
        },
      ],
    },
  },
});
console.log('StyleDictionaryExtended', StyleDictionaryExtended)


StyleDictionaryExtended.buildAllPlatforms()
