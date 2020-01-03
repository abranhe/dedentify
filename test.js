import test from 'ava';
import dedentify from '.';

const expected = `
Star
The
Repo
https://github.com/abranhe/dedentify
`;

const link = 'https://github.com/abranhe/dedentify';

const string = `
Star
		The
				Repo
						${link}
`;

test('title', t => {
	t.is(dedentify(string), expected);
	t.is(dedentify`${string}`, expected);
});
