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
