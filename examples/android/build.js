const androidConfig = require('../../src/android')
const StyleDictionary = require('style-dictionary')
// PATHS
const basePath = './'
const buildPath = basePath + 'examples/build/'

const StyleDictionaryExtended = StyleDictionary.extend({
  // adding imported configs
  ...androidConfig,
  source: [basePath + 'tokens/*.json'],
  platforms: {
    android: {
      transforms: [
        'name/cti/camel',
        'android/colorName',
        'android/fontSize',
        'android/pxToDp',
        'android/color'
      ],
      buildPath: buildPath + 'android/',
      options: {
        copyFilesAction: [
          {
            destination: buildPath + 'android/font/font_family.xml',
            origin: basePath + 'examples/android/filesToCopy/font_family.xml'
          }
        ]
      },
      files: [
        {
          destination: 'values/font_styles.xml',
          format: 'android/fontStyle',
          filter: (token) => token.type === 'custom-fontStyle',
          options: {
            fontFamilies: {
              'Akzidenz-Grotesk Pro': '@font/AkzidenzGroteskPro'
            }
          }
        },
        {
          destination: 'values/dimens.xml',
          format: 'android/resources',
          resourceType: 'dimen',
          filter: (token) => token.type === 'dimension' || token.type === 'custom-fontStyle'
        },
        {
          destination: 'values/colors.xml',
          format: 'android/resourcesSorted',
          resourceType: 'color',
          filter: (token) => {
            return token.type === 'color' && token.path[0].toLowerCase() === 'light'
          }
        },
        {
          destination: 'values-night/colors.xml',
          format: 'android/resourcesSorted',
          resourceType: 'color',
          filter: (token) => {
            return token.type === 'color' && token.path[0].toLowerCase() === 'dark'
          }
        }
      ],
      actions: ['copy_fileOrFolder']
    }
  }
})

StyleDictionaryExtended.buildAllPlatforms()