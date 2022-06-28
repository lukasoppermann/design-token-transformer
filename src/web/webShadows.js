const TinyColor = require('@ctrl/tinycolor')

module.exports = {
  type: 'value',
  matcher: function (token) {
    return token.type === 'custom-shadow' && token.value !== 0
  },
  transformer: function ({ value: {shadowType, offsetX, offsetY, radius, spread, color} }) {
    return `${shadowType === 'innerShadow' ? 'inset ' : ''}${offsetX}px ${offsetY}px ${radius}px ${spread}px ${new TinyColor.TinyColor(color).toRgbString()}`
  }
}
