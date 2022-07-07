const os = require('os');

const currentos = {
	name: os.type(),
	release: os.release(),
	totalmemory: os.totalmem(),
	freememory: os.freemem(),
};
console.log(currentos);
