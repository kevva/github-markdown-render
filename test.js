'use strict';
var test = require('ava');
var githubMarkdownRender = require('./');

test(function (t) {
	t.plan(2);

	githubMarkdownRender('**foo**', function (err, data) {
		t.assert(!err, err);
		t.assert(data.trim() === '<p><strong>foo</strong></p>', data);
	});
});

test(function (t) {
	t.plan(1);

	var stream = githubMarkdownRender.stream();

	stream.on('data', function (data) {
		t.assert(data.toString().trim() === '<p><strong>foo</strong></p>', data.toString());
	});

	stream.end('**foo**');
});
