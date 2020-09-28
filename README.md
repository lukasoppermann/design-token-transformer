# Design Token Transformer

This package is supposed to be used together with [Design Token](https://github.com/lukasoppermann/design-tokens) plugin for Figma.
It transforms the exported design tokens using [Amazon style directory](https://amzn.github.io/style-dictionary/#/).

## Installation
### 1. Download or clone the repo to your computer
You can [download this package](https://github.com/lukasoppermann/design-token-transformer.git) or clone it via teh terminal.

``` Bash
git clone https://github.com/lukasoppermann/design-token-transformer.git
```
### 2. Install dependencies
1. From within the terminal `cd` (navigate) this folder.
2. Run `npm i` to install the dependencies

## Usage
1. Save the `.json` file you exported using the [Design Token](https://github.com/lukasoppermann/design-tokens) plugin to the `tokens` folder (and remove the example file).
2. In the terminal `cd` (navigate) to this folder
3. Run `npm run transform-tokens`
4. 🎉 Your converted tokens should be in the build folder.

## Customization
To customize the output please view the [Amazon style directory documentation](https://amzn.github.io/style-dictionary/#/config)
