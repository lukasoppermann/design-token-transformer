module.exports = {
  type: 'value',
  matcher: ({ unit, value }) => unit === 'percent' && value !== 0,
  transformer: ({ value }) => `${value}%`
}