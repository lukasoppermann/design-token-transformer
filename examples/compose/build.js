const androidConfig = require('../../src/compose')
const matchers = require('../../src/common/matchers')
const StyleDictionary = require('style-dictionary')
// PATHS
const basePath = './'
const buildPath = basePath + 'examples/build/'
const basePackageName = 'org.example'

const StyleDictionaryExtended = StyleDictionary.extend({
  // adding imported configs
  ...androidConfig,
  source: [basePath + 'tokens/*.json'],
  platforms: {
    android: {
      transforms: [
        'attribute/cti',
        'name/cti/camel',
        'compose/colorName',
        // 'compose/remToSp',
        'color/composeColor',
      ],
      buildPath: buildPath + 'compose/',
      files: [
        {
          destination: "StyleDictionaryColor.kt",
          format: "compose/colorObject",
          className: "StyleDictionaryColor",
          packageName: basePackageName,
          filter: (token) => {
            // prettyPrint(token)
            return matchers.isColor(token)
          },
          options: {
            outputReferences: true
          }
        },
        // {
        //   destination: "StyleDictionaryDarkColor.kt",
        //   format: "compose/colorObject",
        //   className: "StyleDictionaryColor",
        //   packageName: basePackageName,
        //   filter: (token) => {
        //     return matchers.isDarkThemeColor(token)
        //   }
        // },
        // {
        //   destination: "StyleDictionarySize.kt",
        //   format: "compose/sizeObject",
        //   className: "StyleDictionarySize",
        //   packageName: basePackageName,
        //   type: "float",
        //   filter: (token) => {
        //     return matchers.isNotFontSize(token)
        //   }
        // },
        // {
        //   destination: "StyleDictionaryType.kt",
        //   format: "compose/sizeObject",
        //   className: "StyleDictionaryType",
        //   packageName: basePackageName,
        //   type: "string",
        //   filter: (token) => {
        //     return matchers.isFontStyle(token)
        //   }
        // },
      ],
      // actions: ['copy_fileOrFolder']
    }
  }
})

const prettyPrint = (token, filterPath = "", tag = "") => {
  if (filterPath !== "" && !token.path.includes(filterPath)) {
    return
  }

  // Long comments make this hard to read, so removing them before logging!
  const tokenWithoutComments = {
    ...token,
    comment: '',
    original: {
      ...token.original,
      comment: '',
    }
  }

  const id = `${token.attributes.category}/${token.name}`
  console.log(`${tag}:${id}\n--->\n ${JSON.stringify(tokenWithoutComments)}\n<---\n`)
}

StyleDictionaryExtended.buildAllPlatforms()