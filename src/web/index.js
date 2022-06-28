const StyleDictionary = require('style-dictionary')
const customTransforms = [
  'size/pixel',
  'size/percent',
  'web/shadow',
  'web/radius',
  'web/padding',
  'web/font',
  'web/gradient',
  'web/grid',
  'color/hex8ToRgba'
]

const transform = {
  'size/pixel': require('../common/sizePixel'),
  'size/percent': require('../common/sizePercent'),
  'web/shadow': require('./webShadow'),
  'web/radius': require('./webRadius'),
  'web/padding': require('./webPadding'),
  'web/font': require('./webFont'),
  'web/gradient': require('./webGradient'),
  'web/grid': require('./webGrid'),
  'color/hex8ToRgba': require('../common/colorToRgbaString')
}

const transformGroup = {
  'custom/scss': StyleDictionary.transformGroup.scss.concat(customTransforms),
  'custom/less': StyleDictionary.transformGroup.less.concat(customTransforms),
  'custom/css': StyleDictionary.transformGroup.css.concat(customTransforms),
}

const format = {
  'custom/css': require('./formatCss')
}

const action = {}

module.exports = {
  transform,
  transformGroup,
  format,
  action
}
