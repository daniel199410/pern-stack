const { Router } = require('express');
const pool = require('../db');
const { getTasks, getTask, createTask, deleteTask, updateTask } = require('../controllers/task.controller');

const router = Router();

router.get('/tasks', getTasks);

router.get('/tasks/:id', getTask);

router.post('/tasks', createTask);

router.delete('/tasks/:id', deleteTask);

router.put('/tasks/:id', updateTask);

module.exports = router;
