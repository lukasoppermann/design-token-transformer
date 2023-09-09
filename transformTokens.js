const StyleDictionary = require('style-dictionary')

const modes = [`light`, `dark`];
const iosPath = `ios/dist/`;
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

console.log(`☀️ Building light mode...`);
styleDictionary.extend({
  source: [`tokens/**/!(*.${modes.join(`|*.`)}).json5`],
  platforms: {
    iosColors: Object.assign(iosColors, {
      mode: `light`
    })
  },
}).buildAllPlatforms();

// Dark Mode
// we will only build the files we need to, we don't need to rebuild all the files
console.log(`\n\n🌙 Building dark mode...`);
styleDictionary.extend({
  // Using the include array so that theme token overrides don't show
  // warnings in the console. 
  include: [
    `tokens/**/!(*.${modes.join(`|*.`)}).json5`
  ],
  source: [`tokens/**/*.dark.json5`],
  platforms: {
    iosColors: Object.assign(iosColors, {
      mode: `dark`
    })
  },
}).buildAllPlatforms();
