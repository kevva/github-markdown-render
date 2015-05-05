# github-markdown-render [![Build Status](https://travis-ci.org/kevva/github-markdown-render.svg?branch=master)](https://travis-ci.org/kevva/github-markdown-render)

> Render markdown using the GitHub Markdown API


## Install

```
$ npm install --save github-markdown-render
```


## Usage

```js
var fs = require('fs');
var githubMarkdownRender = require('github-markdown-render');

githubMarkdownRender('**foo**', function (err, data) {
	console.log(data);
	//=> '<p><strong>foo</strong></p>'
});

fs.createReadStream('readme.md')
	.pipe(githubMarkdownRender.stream())
	.pipe(fs.createWriteStream('index.html'));
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

### githubMarkdownRender.stream()

Creates a Readable/Writable stream which you can pipe markdown to.


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
