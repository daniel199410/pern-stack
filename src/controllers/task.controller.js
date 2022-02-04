const pool = require('../db');

const getTasks = async (req, res) => {
	try {
		const tasks = await pool.query('SELECT * FROM task');
        	res.json(tasks.rows);
	}catch(error) {
                res.status(500);
                res.json({error: "Ha ocurrido un error"});
        }
};

const getTask = async (req, res) => res.send('Retrieving a task');

const createTask = async (req, res) => {
	try {
		const { title, description } = req.body;
        	const result = await pool.query('INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *', [title, description]);
        	console.log(result);
        	res.json(result.rows[0]);
	} catch(error) {
		res.status(500);
		res.json({error: "Ha ocurrido un error"});
	}
}

const deleteTask = async (req, res) => res.send('Deleting a list of tasks');

const updateTask = async (req, res) => res.send('Updating a list of tasks');

module.exports = {
	getTasks,
	getTask,
	createTask,
	deleteTask,
	updateTask,
}
