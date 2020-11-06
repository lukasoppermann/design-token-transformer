# Design Token Transformer

This package is supposed to be used together with the [Design Tokens plugin for Figma](https://github.com/lukasoppermann/design-tokens).
It transforms the exported design tokens using [Amazon style directory](https://amzn.github.io/style-dictionary/#/).

## Installation
### 1. Download or clone the repo to your computer
You can [download this package](https://github.com/lukasoppermann/design-token-transformer/archive/master.zip) or clone it via the terminal.

``` Bash
git clone https://github.com/lukasoppermann/design-token-transformer.git
```
### 2. Install dependencies
1. From within the terminal `cd` (navigate) this folder.
2. Run `npm i` to install the dependencies.

## Usage
### Local transformation
To use an exported json file and transform it locally on your machine, follow the 3 steps below:

1. Save the `.json` file you exported using the [Design Token](https://github.com/lukasoppermann/design-tokens) plugin to the [`tokens` folder](./tokens/) (and remove the example files).
2. In the terminal `cd` (navigate) to this folder.
3. Run `npm run transform-tokens`.
4. 🎉 Your converted tokens should be in the build folder.

### Transformation in github repository
1. Fork this repository.
2. Enable github actions in the [actions tab](../../actions)
3. Adapt the `transform-tokens` script in the [package.json](./package.json).
4. Adapt the [github workflow](.github/workflows/transform-tokens.yml).
5. Create a [personal access token](#personal-access-token).
6. Add the [push to server settings](https://github.com/lukasoppermann/design-tokens/#push-to-server) & your access token in Figma.
7. Run the `Send Design Tokens to Url` command from the plugin.
8. 🎉 You should be able to see the action running in your GitHub repo and have all the converted files in the [build folder](./build) once it is done.

#### Personal access token
The access token should be specifically for this plugin and only have the minimal permissions needed:
- only `public_repo` is needed for a public repository.

The token is not stored with the Figma file but only locally on your machine.

Here you can find more information about [creating personal access tokens in the docs](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token).

### Custom dev server 
If you want to set up a custom server that responds to a push from this plugin, check out the setup for GitHub and adapt it to your needs.
If you run into problems, please create an issues in the main [Design Tokens plugin for Figma repository](https://github.com/lukasoppermann/design-tokens/issues/new).

## Customization
To customize the output please view the [Amazon style dictionary documentation](https://amzn.github.io/style-dictionary/#/config).

## Bugs, issues & feature requests
If you have issues concerning the [Design Tokens plugin for Figma](https://github.com/lukasoppermann/design-tokens) please [create an issue in the plugin repo](https://github.com/lukasoppermann/design-tokens/issues/new). 

Only create an issue in this repository if you have an issue with this transformation package.
