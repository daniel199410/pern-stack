const { Pool } = require('pg');

const pool = new Pool({
	user: 'pern_user',
	password: 'pern_password',
	host:'localhost',
	port:54321,
	database: 'tasks_db'
});

module.exports = pool;
