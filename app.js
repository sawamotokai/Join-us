const mysql = require('mysql');
const faker = require('faker');
const dotenv = require('dotenv');
dotenv.config();
const con = mysql.createConnection({
	host: process.env.HOST,
	user: process.env.USERNAME,
	password: process.env.PASSWORD,
	database: 'join_us'
});

// const q = 'SELECT * FROM users';
// con.query(q, (error, results, fields) => {
// 	if (error) throw error;
// 	console.log(results);
// });
// var q = `INSERT INTO users SET ?`;

// const person = {
// 	email: faker.internet.email(),
// 	created_at: faker.date.past()
// };
// con.query(q, person, (error, results) => {
// 	if (error) throw error;
// 	console.log(results);
// });

// inserting bulky data
var data = [];
for (let i = 0; i < 768; i++) data.push([ faker.internet.email(), faker.date.past() ]);
con.query('INSERT INTO users (email, created_at) VALUES ?', [ data ], (err, results) => {
	if (err) throw err;
	console.log(results);
});

con.end();
