const StyleDictionaryExtended = require('style-dictionary').extend(__dirname + '/config.json');
const {tokens, version, data} = require(__dirname + '/tokens/w3c-design-tokens.json')
console.log('Build started...');
console.log('\n==============================================');
// StyleDictionaryExtended.transformGroup = null
// StyleDictionaryExtended.transform = null
// StyleDictionaryExtended.format = null
console.log(tokens)
console.log('version', version)
StyleDictionaryExtended.properties = tokens.reduce((acc, item) => ({
  ...acc, [item.name]: item
}), {})
console.log(StyleDictionaryExtended.properties)
// console.log(Object.keys(StyleDictionaryExtended).map(key => console.log(key)))
// console.log(StyleDictionaryExtended)

// StyleDictionaryExtended.registerFormat({
//   name: 'scss/variables',
//   formatter: function (dictionary, config) {
//     let header = `
// /* *****************************************************
//  * <Company Name> Tokens v${version}
//  *
//  * DO NOT EDIT DIRECTLY!
//  * Generated on ${new Date().toUTCString()}
//  * */

// `;

//     return (
//       header +
//       dictionary.allProperties
//         .join('\n')
//     );
//   },
// });

// FINALLY, BUILD ALL THE PLATFORMS
StyleDictionaryExtended.buildAllPlatforms();

console.log('\n==============================================');
console.log('\nBuild completed!');