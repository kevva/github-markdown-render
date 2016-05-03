#!/usr/bin/env node
'use strict';
const meow = require('meow');
const githubMarkdownRender = require('./');

const cli = meow(`
	Usage
	  $ github-markdown-render **foo**
	  $ cat readme.md | github-markdown-render
`);

if (!cli.input.length && process.stdin.isTTY) {
	console.error('Markdown required');
	process.exit(1);
}

if (cli.input.length) {
	githubMarkdownRender(cli.input[0]).then(res => console.log(res));
} else {
	process.stdin
		.pipe(githubMarkdownRender.stream())
		.pipe(process.stdout);
}
