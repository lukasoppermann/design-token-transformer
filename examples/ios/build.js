/* eslint-disable @typescript-eslint/no-var-requires */
const iosConfig = require('../../src/ios')
const StyleDictionary = require('style-dictionary')

// PATHS
const basePath = './'
const buildPath = basePath + 'examples/build/'

const StyleDictionaryExtended = StyleDictionary.extend({
  // adding imported configs
  ...iosConfig,
  source: [basePath + 'tokens/*.json'],
  platforms: {
    'ios-swift': {
      transforms: [
        'name/cti/camel'
      ],
      buildPath: buildPath + 'ios/',
      options: {
        fontFamilies: {
          'Akzidenz-Grotesk Pro.700': 'AkzidenzGroteskPro_Bold',
          'Akzidenz-Grotesk Pro.900': 'AkzidenzGroteskPro_Black'
        }
      },
      files: [
        {
          destination: 'Size.swift',
          filter: (token) => token.type === 'dimension',
          className: 'Size',
          format: 'ios-swift/class.swift'
        }
      ],
      actions: [
        'ios/colorSets',
        'ios/fontStyles'
      ]
    }
  }
})

StyleDictionaryExtended.buildAllPlatforms()
