const { Router } = require('express');

const router = Router();

router.get('/tasks', (req, res) => {
	res.send('Retrieving a list of tasks');
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
