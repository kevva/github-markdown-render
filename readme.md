# github-markdown-render [![Build Status](https://travis-ci.org/kevva/github-markdown-render.svg?branch=master)](https://travis-ci.org/kevva/github-markdown-render)

> Render markdown using the GitHub Markdown API


## Install

```
$ npm install --save github-markdown-render
```


## Usage

```js
var githubMarkdownRender = require('github-markdown-render');

githubMarkdownRender('**foo**', function (err, data) {
	console.log(data);
	//=> '<p><strong>foo</strong></p>'
});
```


## API

### githubMarkdownRender(markdown, callback)

#### markdown

*Required*  
Type: `string`

Markdown to be rendered.

#### callback(err, data)

Type: `function`

##### data

Type: `string`

Rendered HTML.


## CLI

```sh
$ npm install --global github-markdown-render
```

```sh
$ github-markdown-render --help

  Usage
    $ github-markdown-render **foo**
    $ cat readme.md | github-markdown-render
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
