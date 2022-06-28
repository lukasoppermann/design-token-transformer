const StyleDictionary = require('style-dictionary')
const baseConfig = require('./config.json')
const webConfig = require('./src/web')

StyleDictionary.registerFilter({
  name: 'validToken',
  matcher: function(token) {
    return ['dimension', 'string', 'number', 'color'].includes(token.type)
  }
})

const StyleDictionaryExtended = StyleDictionary.extend({
  ...baseConfig,
  ...webConfig
})

StyleDictionaryExtended.buildAllPlatforms()