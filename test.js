import test from 'ava';
import m from './';

test('callback', t => {
	m('**foo**', (err, data) => {
		t.true(!err, err);
		t.true(data.trim() === '<p><strong>foo</strong></p>', data);
	});
});

test('stream', t => {
	const stream = m.stream();

	stream.on('data', data => t.true(data.toString().trim() === '<p><strong>foo</strong></p>', data.toString()));
	stream.end('**foo**');
});
