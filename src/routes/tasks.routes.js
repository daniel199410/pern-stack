const { Router } = require('express');
const pool = require('../db');
const { getTasks, getTask, createTask, deleteTask, updateTask } = require('../controllers/task.controller');

const router = Router();

router.get('/tasks', getTasks);

router.get('/tasks/10', getTask);

router.post('/tasks', createTask);

router.delete('/tasks', deleteTask);

router.put('/tasks', updateTask);

module.exports = router;
