// const express = require('express');
// const app = express();
// const sql = require('mysql');

// // const db = sql.createPool({
// // 	host: 'localhost',
// // 	user: 'root',
// // 	password: 'password',
// // 	database: 'CRUDDATA',
// // });
// // app.get('/', (req, res) => {
// // 	const sqlinsert =
// // 		"INSERT INTO teacherdata (name,remark) VALUES('Zach','He is boring and fun')";

// // 	db.query(sqlinsert, (err, result) => {
// // 		if (err) {
// // 			console.log(err);
// // 		} else {
// // 			console.log(`no of rows affected are ${result.affectedRows}`);
// // 		}
// // 	});
// 	res.send('Welcome To Node Class');

// app.listen(5000, () => {
// 	console.log('listening at port 5000');
// });

const http = require('http');

const server = http.createServer((req, res) => {
	res.write('welcome to homepage');
	res.end();
});
server.listen(5000);
