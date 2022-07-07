const { readFile, writeFile } = require('fs');

path1 = './content/test.txt';
path2 = './content/test2.txt';
path3 = './content/result-async.txt';

readFile(path1, 'utf8', async (err, result) => {
	if (err) throw err;
	const first = result;

	readFile(path2, 'utf8', (err, result) => {
		if (err) {
			console.log(err);
			return;
		}
		const second = result;

		writeFile(
			path3,
			`${first},${second}`,
			{ flag: 'w' },
			(err, result) => {
				if (err) {
					console.log(err);
					return;
				}
				return result;
			},
		);
	});
});
