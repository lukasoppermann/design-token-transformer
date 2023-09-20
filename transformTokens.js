const StyleDictionary = require('style-dictionary')

const modes = [`light`, `dark`];
const iosPath = `ios/`;
const iosColors = {
  buildPath: iosPath,
  transforms: [`attribute/cti`, `colorRGB` ,`name/ti/camel`],
  actions: [`generateColorsets`]
};

const styleDictionary = StyleDictionary.extend({
  action: {
    generateColorsets: require('./src/actions/ios/colorsets')
  },
  transform: {
    'attribute/cti': require('./src/transforms/attributeCTI'),
    'colorRGB': require('./src/transforms/colorRGB')
  }
})

console.log(`☀️ Building light & dark mode...`);
styleDictionary.extend({
  source: [`tokens/**/!(*.${modes.join(`|*.`)}).json`],
  platforms: {
    iosColors
  },
}).buildAllPlatforms();
