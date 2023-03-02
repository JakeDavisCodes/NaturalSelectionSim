const express = require('express');
const morgan = require('morgan');
const path = require('path');

const router = require('./router.js');
const db = require('./db.js').db;

const app = express();
const port = 3000;

// MIDDLE WARE
app.use(morgan('dev'));
app.use(express.json());

app.use('/', router);
app.use(express.static(path.join(__dirname, '../client/dist'))); // SERVE CLIENT FILES

app.listen(port);
// eslint-disable-next-line no-console
console.log(`LISTENING AT PORT: ${port}`);
