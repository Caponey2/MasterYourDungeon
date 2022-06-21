import { Client, Pool } from 'pg';
const format = require('pg-format');
const pool = new Pool({
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
});
const logT = () => {
	return new Date().toLocaleString().split(' ').slice(1).join(' ');
};
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

(async () => {
	console.log('Data will be overwritten');
	console.log('Type y to continue:');
	const allow = await new Promise((resolve) => {
		readline.question('->', resolve);
	});

	if (allow !== 'y') {
		process.exit();
	}

	console.log('Re-Creating the database...');
	const tempClient = new Client({
		user: process.env.USER,
		password: process.env.PASSWORD,
		database: 'template1',
	});

	try {
		await tempClient.connect();
		await tempClient.query(
			format('DROP DATABASE IF EXISTS %s;', process.env.DATABASE)
		);
		await tempClient.query(
			format('CREATE DATABASE %s;', [process.env.DATABASE])
		);
		await tempClient.end();
	} catch (e) {
		await tempClient.end();
		console.log(e);
	}
	const client = await pool.connect();

	try {
		console.log('Thing tried');
	} finally {
		client.release();
	}
})().catch((error) => {
	console.log(error);
	process.exit();
});
