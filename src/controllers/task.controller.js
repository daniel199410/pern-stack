const pool = require('../db');

const makeRequest = f => {
	try {
		f();
	} catch(error) {
		res.status(500);
		res.json({error: 'Ha ocurrido un error'});
	}
}

const getTasks = async (req, res) => {
	makeRequest(async () => {
		try {
                	const tasks = await pool.query('SELECT * FROM task');
                	res.json(tasks.rows);
        	}catch(error) {
                	res.status(500);
                	res.json({error: "Ha ocurrido un error"});
        	}
	});
};

const getTask = async (req, res) => {
	makeRequest(async () => {
		const { id } = req.params;
        	const result = await pool.query('SELECT * FROM task WHERE id = $1', [id]);
        	if(result.rows.length === 0) {
                	return res.status(404).json({message: 'Task not found'});
        	}
        	res.json(result.rows[0]);
	});
}

const createTask = async (req, res) => {
	makeRequest(async () => {
		try {
                	const { title, description } = req.body;
                	const result = await pool.query(
				'INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *',
				[title, description]
			);
                	res.json(result.rows[0]);
        	} catch(error) {
                	res.status(500);
                	res.json({error: "Ha ocurrido un error"});
        	}
	});
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
