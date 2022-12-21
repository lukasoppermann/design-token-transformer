const fs = require('fs');
const _template = require('lodash/template');

const { fileHeader, sortByReference, createPropertyFormatter, sortByName } = require('style-dictionary').formatHelpers

module.exports = ({ dictionary, platform, options = {}, file }) => {
    const template = _template(
        fs.readFileSync(__dirname + '/templates/objectSize.kt.template')
      );
      let allTokens;
      const { outputReferences } = options;
      const formatProperty = createPropertyFormatter({
        outputReferences,
        dictionary,
        formatting: {
          suffix: '',
          commentStyle: 'none' // We will add the comment in the format template
        }
      });
  
      if (outputReferences) {
        allTokens = [...dictionary.allTokens].sort(sortByReference(dictionary));
      } else {
        allTokens = [...dictionary.allTokens].sort(sortByName);
      }

      return template({allTokens, file, options, formatProperty, fileHeader});
}