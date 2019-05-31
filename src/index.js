require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(morgan(process.env.MODE))
app.use(require('./routes'));

app.listen(process.env.PORT || 3000);
