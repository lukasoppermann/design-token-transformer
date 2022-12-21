const { isFontSize } = require('../../src/common/matchers')

module.exports = {
    type: 'value',
    matcher: isFontSize,
    transformer: function (token, options) {
        const val = parseFloat(token.value);
        if (isNaN(val)) throwSizeError(token.name, token.value, 'sp');
        return `${val}.sp`;
    }
}