const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/test.txt', 'utf8');
const second = readFileSync('./content/test2.txt', 'utf8');
console.log(first, second);

writeFileSync('./content/newtext', `result is:${first},${second},`, {
	flag: 'a',
});
