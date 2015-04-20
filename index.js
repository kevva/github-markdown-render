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
