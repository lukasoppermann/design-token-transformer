# Design Token Transformer

This package is supposed to be used together with the [Design Tokens plugin for Figma](https://github.com/lukasoppermann/design-tokens).
It transforms the exported design tokens using [Amazon style dictionary](https://amzn.github.io/style-dictionary/#/).

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
### Option 1: Local transformation
To use an exported json file and transform it locally on your machine, follow the 3 steps below:

1. Save the `.json` file you exported using the [Design Token](https://github.com/lukasoppermann/design-tokens) plugin to the [`tokens` folder](./tokens/) (and remove the example files).
2. In the terminal `cd` (navigate) to this folder.
3. Run `npm run transform-tokens`.
4. 🎉 Your converted tokens should be in the build folder.

### Option 2: Transformation in github repository (or on server)
##### 1. Fork this repository.  
It is recommended to create a [fork](../../fork) of this repository and adapt it to your needs.   
Should you decide to instead create a new repo, make sure to set up a [.github/workflows](.github/workflows) file that handles the data.

##### 2. Enable github actions in the [actions tab](../../actions) 
Go to the [actions tab](../../actions) in **your fork** of this repository and enable the github actions by clicking the `enable actions` button.

##### 3. Create a [personal access token](#personal-access-token).

##### 4. Add repo url & access token to plugin settings
In the plugin settings you need to add two items:
1. Add the url to your repository in the format `https://api.github.com/repo/:username/:repo/dispatches` to the `server-url` field (See [server-url](https://github.com/lukasoppermann/design-tokens/#server-url) for details)
2. Add the [personal access token](#personal-access-token) to the [access token](https://github.com/lukasoppermann/design-tokens/#access-token) field.

##### 5. Run the `Send Design Tokens to Url` command from the plugin.

##### 6. 🎉 You are done.
You should be able to see the action running in your GitHub repo and have all the converted files in the [build folder](./build) once it is done.

##### 7. Optional: Adapt the `transform-tokens` script in the [package.json](./package.json).
If you want to you can do something else when the tokens are pushed to the server you can change the `transform-tokens` script in the [package.json](./package.json). However note that the name of the script `transform-tokens` should not be changed.

##### 8. Optional: Adapt the [github workflow](.github/workflows/transform-tokens.yml)
You can adapt the workflow file if you need to. Just make sure the keep the current setup working.

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

## FAQ
### Sending tokens to the server
#### I don't see the tokens in the github repositiory
1. Make sure you have a [.github/workflows](.github/workflows)
2. Make sure you enabled github actions in the [actions tab](../../actions) of **your** repositiory.
3. Verify that you specified the correct server url in the plugin settings: `https://api.github.com/repos/{username}/{reponame}/dispatches` (replace `{username}` with your username e.g. `lukasoppermann` and `{reponame}` with the name of your repo e.g. `design-token-transformer`)
3. Verify that the action runs without any error

#### I can't enable github actions
If you only see the `Get started with GitHub Actions` page without an option to `enable actions` you either deleted the [.github/workflows](.github/workflows) file from your forked repository, or you created a new repositiory without adding a [.github/workflows](.github/workflows) file. See [step 1](#1-fork-this-repository).

## Bugs, issues & feature requests
If you have issues concerning the [Design Tokens plugin for Figma](https://github.com/lukasoppermann/design-tokens) please [create an issue in the plugin repo](https://github.com/lukasoppermann/design-tokens/issues/new). 

Only create an issue in this repository if you have an issue with this transformation package.
