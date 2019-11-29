const mysql = require('mysql');
const faker = require('faker');
const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
dotenv.config();

const con = mysql.createConnection({
	host: process.env.HOST,
	user: process.env.USERNAME,
	password: process.env.PASSWORD,
	database: 'join_us'
});

app.get('/', (req, res) => {
	const q = 'SELECT COUNT(*) AS userNum FROM users';
	con.query(q, (err, results) => {
		if (err) throw err;
		console.log(results);
		// res.send(`We have ${results[0].userNum} users!`);
		res.render('home', { userNum: results[0].userNum });
	});
});

app.post('/register', (req, res) => {
	var email = req.body.email;
	q = 'INSERT INTO users SET ?';
	con.query(q, { email: email }, (err, results) => {
		if (err) throw err;
		console.log(results);
	});
	res.redirect('/');
});

app.listen((PORT = process.env.PORT), () => {
	console.log(`Server running on ${process.env.PORT}`);
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
// var data = [];
// for (let i = 0; i < 768; i++) data.push([ faker.internet.email(), faker.date.past() ]);
// con.query('INSERT INTO users (email, created_at) VALUES ?', [ data ], (err, results) => {
// 	if (err) throw err;
// 	console.log(results);
// });

// con.end();
