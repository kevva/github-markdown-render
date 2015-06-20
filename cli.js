#!/usr/bin/env node
'use strict';
var meow = require('meow');
var githubMarkdownRender = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ github-markdown-render **foo**',
		'  $ cat readme.md | github-markdown-render'
	]
});

function run(str) {
	githubMarkdownRender(str, function (err, data) {
		if (err) {
			console.error(err.message);
			process.exit(1);
		}

		console.log(data);
	});
}

if (process.stdin.isTTY) {
	if (!cli.input[0]) {
		console.error('Markdown required');
		process.exit(1);
	}

	run(cli.input[0]);
} else {
	process.stdin
		.pipe(githubMarkdownRender.stream())
		.pipe(process.stdout);
}
