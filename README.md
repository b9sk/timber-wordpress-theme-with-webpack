
# The Timber Starter Theme

The "_s" for Timber: a dead-simple theme that you can build from. The primary purpose of this theme is to provide a file structure rather than a framework for markup or styles. Configure your Sass, scripts, and task runners however you would like!

### Installation

[See this reference](README.timber.md)

## Laravel Mix

A Webpack wrapper.

### Features
* SCSS with examples
* SCSS source-map files for `dev`
* BrowserSync proxy
* Reload BrowserSync on Twig change
* TypeScript support
* JS import into Typescript

### Essential commands:
* `npm run dev` builds js and css files into `dist/` folder without minifying them
* `npm run watch` reloads Webpack on every change within src/ folder
* `npm run prod` builds js and css into `dist/` folder for Production env

### File structure
* `src/scss`
* `src/js`
* `dist/`

### Known issues
* resolve-url-loader makes absolute urls (default Laravel Mix behavior)
and has to be configured manually

### TODO
* add SVG sprites by `svg-spritemap-webpack-plugin`

