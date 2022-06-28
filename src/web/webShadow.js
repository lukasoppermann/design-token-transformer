const TinyColor = require('@ctrl/tinycolor')

module.exports = {
  type: 'value',
  matcher: (token) => token.type === 'custom-shadow' && token.value !== 0,
  transformer: ({ value: {shadowType, offsetX, offsetY, radius, spread, color} }) =>
    `${shadowType === 'innerShadow' ? 'inset ' : ''}${offsetX}px ${offsetY}px ${radius}px ${spread}px ${new TinyColor.TinyColor(color).toRgbString()}`
}
