module.exports = {
  transform: {
    'compose/color': require('../common/colorToHex8'),
    'compose/colorName': require('./transformColorName'),
    'compose/remToSp': require('./transformFontSize')
  },
  // action: {
  //   copy_fileOrFolder: require('../common/copyFileOrFolder')
  // },
  format: {
    'compose/colorObject': require('./formatColorObject'),
    'compose/sizeObject': require('./formatSizeObject'),
  }
}
