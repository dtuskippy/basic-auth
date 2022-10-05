'use strict';

const express = require('express');
const notFound = require('./middleware/404');
const errorHandler = require('./middleware/500');
const usersRouter = require('./auth/router');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
  res.status(200).send('Hello, welcome to the World of User Auth!');
});

app.get('/hello', (req, res, next) => {
  res.status(200).send('Hello there!');
});

app.use(usersRouter);
app.use('*', notFound);
app.use(errorHandler);

module.exports = {
  server: app,
  start: () => app.listen(PORT, console.log('Server running on: ', PORT)),
};

