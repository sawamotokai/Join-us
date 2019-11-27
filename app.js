const mysql = require('mysql');
const faker = require('faker');
const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createConnection({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: 'joinus'
});
