'use strict';

var ghGot = require('gh-got');

module.exports = function (markdown, cb) {
	if (typeof markdown !== 'string') {
		throw new TypeError('Markdown required');
	}

	ghGot.post('markdown/raw', {
		body: markdown,
		headers: {'content-type': 'text/plain'},
		json: false
	}, function (err, data) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, data);
	});
};

module.exports.stream = function () {
	var stream = ghGot.post('markdown/raw', {
		json: false,
		headers: {
			accept: 'application/vnd.github.v3+json',
			'content-type': 'text/plain',
			'user-agent': 'https://github.com/sindresorhus/gh-got'
		}
	});

	return stream;
};
