const StyleDictionary = require('style-dictionary')

const StyleDictionaryExtended = StyleDictionary.extend({
  source: ["tokens/**/*.json"],
  action: {
    colorsets: require("./src/ios/colorsets")
  },
  platforms: {
    "ios-colorsets": {
			buildPath: "build/ios-colorsets/",
			transforms: ["attribute/cti", "name/cti/pascal",  "attribute/color"],
      actions: [`colorsets`]
    }
  },
});

StyleDictionaryExtended.buildAllPlatforms()
