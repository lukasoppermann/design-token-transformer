const StyleDictionary = require('style-dictionary')

module.exports = {
  transform: {
    'size/px': require('../common/sizePixel'),
    'size/percent': require('../common/sizePercent'),
    'web/shadow': require('./webShadows'),
    'web/radius': require('./webRadius'),
    'web/padding': require('./webPadding'),
    'web/font': require('./webFont'),
    'web/gradient': require('./webGradient'),
    'color/hex8ToRgba': require('../common/colorToRgbaString')
  },
  transformGroup: {
    'custom/scss': StyleDictionary.transformGroup.css.concat([
      'size/px',
      'size/percent',
      'web/shadow',
      'web/radius',
      'web/padding',
      'web/font',
      'web/gradient',
      'color/hex8ToRgba'
    ])
  },
  format: {
    'custom/css': require('./formatCss')
  },
  action: {}
}
