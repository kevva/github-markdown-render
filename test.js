import getStream from 'get-stream';
import test from 'ava';
import m from './';

test('promise', async t => {
	t.true((await m('**foo**')).trim() === '<p><strong>foo</strong></p>');
});

test('stream', async t => {
	const stream = m.stream();
	stream.end('**foo**');
	t.is((await getStream(stream)).toString().trim(), '<p><strong>foo</strong></p>');
});
