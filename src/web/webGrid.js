module.exports = {
  type: 'value',
  matcher: (token) => token.type === 'custom-grid' && token.value !== 0,
  transformer: (token) => Object.entries(token.value).join(' ')
}
