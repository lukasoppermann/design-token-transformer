function isFontSize(token) {
    return token.attributes.category === 'font'
        && token.attributes.type === 'material-theme'
        && token.attributes.state === 'fontSize'
}

function isNotFontSize(token) {
    return token.attributes.category !== 'font'
        && token.attributes.type === 'material-theme'
        && token.type === 'number'; // need to validate this!
}

function isFontStyle(token) {
    return token.attributes.category === 'font'
        && token.attributes.type === 'material-theme'
}

function isColor(token) {
    return token.attributes.category === 'color'
        && token.attributes.type !== 'source'
}

function isLightThemeColor(token) {
    return isColor(token) 
        && token.attributes.subitem === 'light'
}

function isDarkThemeColor(token) {
    return isColor(token) 
        && token.attributes.subitem === 'dark'
}

module.exports = {
    isFontSize,
    isNotFontSize,
    isFontStyle,
    isColor,
    isLightThemeColor,
    isDarkThemeColor,
}