module.exports = {
  type: 'value',
  matcher: ({type, value}) => type === 'dimension' && value !== 0,
  transformer: ({ value }) => `${value}px`
}
