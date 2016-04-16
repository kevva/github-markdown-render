import test from 'ava';
import m from './';

test('promise', async t => {
	t.true((await m('**foo**')).trim() === '<p><strong>foo</strong></p>');
});

test.cb('stream', t => {
	t.plan(1);

	const stream = m.stream();

	stream.on('data', data => {
		t.true(data.toString().trim() === '<p><strong>foo</strong></p>');
		t.end();
	});
	stream.end('**foo**');
});
