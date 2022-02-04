const express = require('express');
const morgan = require('morgan');
const taskRoute = require('./routes/tasks.routes');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(taskRoute);
app.use((error, req, res, next) => {
	console.log(error);
	return res.status(500).json({message: 'An error has occurred'})
});
app.listen(4000);
