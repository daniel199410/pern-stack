const express = require('express');
const morgan = require('morgan');
const taskRoute = require('./routes/tasks.routes');
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(taskRoute);
app.use((error, req, res, next) => {res.status(500).json({message: 'An error has occurred'})});
app.listen(4000);
