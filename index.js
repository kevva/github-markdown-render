'use strict';

var got = require('got');

module.exports = function (markdown, cb) {
	if (typeof markdown !== 'string') {
		throw new TypeError('Expected a string');
	}

	var url = 'https://api.github.com/markdown/raw';
	var headers = {
		Accept: 'application/vnd.github.v3+json',
		'Content-Type': 'text/plain',
		'User-Agent': 'https://github.com/kevva/github-markdown-render'
	};

	got.post(url, {
		body: markdown,
		headers: headers
	}, function (err, data) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, data);
	});
};
