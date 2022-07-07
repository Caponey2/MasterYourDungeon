require('dotenv').config();
const { Client, Pool } = require('pg');

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
		database: process.env.DATABASE,
	});
	console.log(tempClient.password);
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
		console.log(logT(), 'Deleting existing schemas...');
		await client.query(`DROP SCHEMA if exists mvp cASCADE;`);

		console.log(logT(), 'Creating new schema...');
		await client.query(`CREATE SCHEMA mvp`);

		console.log(logT(), 'Creating users table...');
		await client.query(
			`CREATE TABLE if not exists users (
				id 				serial PRIMARY KEY,
				username 		varchar NOT NULL ,
				email 			varchar NOT NULL
		
			);`
		);

		console.log(logT(), 'Creating parties table...');
		await client.query(
			`CREATE TABLE if not exists parties (
				id 				serial PRIMARY KEY ,
				username 		varchar NOT NULL ,
				partyname		varchar NOT NULL 
				
			);`
		);

		console.log(logT(), 'Creating characters table...');
		await client.query(
			`CREATE TABLE if not exists characters (
				id 				serial PRIMARY KEY ,
				username 		varchar NOT NULL ,
				partyname		varchar NOT NULL ,
				charactername   varchar NOT NULL ,
				PFname			varchar NOT NULL ,
				PLname			varchar NOT NULL ,
				CFname 			varchar NOT NULL , 
				CLname 			varchar NOT NULL , 
				race 			varchar NOT NULL ,
				class 			varchar NOT NULL ,
				level 			smallint NOT NULL
		
			);`
		);
		console.log('Done.');
		process.exit();
	} finally {
		client.release();
	}
})().catch((error) => {
	console.log(error);
	process.exit();
});
