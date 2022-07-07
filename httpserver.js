const http = require('http');

const server = http.createServer((req, res) => {
	res.write('welcome to homepage');
	res.end();
});
server.listen(5000);
