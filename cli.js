#!/usr/bin/env node
'use strict';
const meow = require('meow');
const fn = require('./');

const cli = meow(`
	Usage
	  $ github-markdown-render **foo**
	  $ cat readme.md | github-markdown-render
`);

if (process.stdin.isTTY) {
	if (!cli.input[0]) {
		console.error('Markdown required');
		process.exit(1);
	}

	return fn(cli.input[0]).then(res => console.log(res));
}

process.stdin
	.pipe(fn.stream())
	.pipe(process.stdout);
