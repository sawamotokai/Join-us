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

const q = 'SELECT * FROM users';
con.query(q, (error, results, fields) => {
	if (error) throw error;
	console.log(results);
});

con.end();
