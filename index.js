'use strict';

const format = str => {
	let size = -1;

	return str.replace(/\n(\s+)/g, (m, m1) => {
		if (size < 0) {
			size = m1.replace(/\t/g, '    ').length;
		}

		return '\n' + m1.slice(Math.min(m1.length, size));
	});
};

const dedentify = (callSite, ...args) => {
	if (typeof callSite === 'string') {
		return format(callSite);
	}

	if (typeof callSite === 'function') {
		return (...args) => format(callSite(...args));
	}

	const output = callSite
		.slice(0, args.length + 1)
		.map((text, i) => (i === 0 ? '' : args[i - 1]) + text)
		.join('');

	return format(output);
};

module.exports = dedentify;
