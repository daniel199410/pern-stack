const express = require('express');
const morgan = require('morgan');
const taskRoute = require('./routes/tasks.routes');
const app = express();
app.use(morgan('dev'));
app.use(taskRoute);
app.listen(4000);
