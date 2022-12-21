const camelCase = require('../common/camelCaseHelper')

module.exports = {
  type: 'name',
  matcher: function (token) {
    return token.type === 'color'
  },
  transformer: function (token) {
    // { ... "path":["color","material-theme","sys","dark","on-tertiary"]}
    return camelCase(token.path.slice(1).join(' '))
  }
}
