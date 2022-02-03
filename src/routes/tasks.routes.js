const { Router } = require('express');
const pool = require('../db');

const router = Router();

router.get('/tasks', async (req, res) => {
	const result = await pool.query('SELECT NOW()');
	console.log(result);
	res.json(result.rows[0].now);
});

router.get('/tasks/10', (req, res) => {
        res.send('Retrieving a task');
});

router.post('/tasks', (req, res) => {
        res.send('Creating a list of tasks');
});

router.delete('/tasks', (req, res) => {
        res.send('Deleting a list of tasks');
});

router.put('/tasks', (req, res) => {
        res.send('Updating a list of tasks');
});


module.exports = router;
