'use strict';
const ghGot = require('gh-got');

module.exports = markdown => {
	if (typeof markdown !== 'string') {
		return Promise.reject(new TypeError('Markdown required'));
	}

	return ghGot.post('markdown/raw', {
		body: markdown,
		headers: {'content-type': 'text/plain'},
		json: false
	}).then(res => res.body);
};

module.exports.stream = () => ghGot.stream.post('markdown/raw', {
	headers: {'content-type': 'text/plain'},
	json: false
});
