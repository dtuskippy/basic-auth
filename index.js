'use strict';

const { sequelizeDatabase } = require('./src/auth/models');
const { start } = require('./src/server');

sequelizeDatabase.sync()
  .then(() => {
    console.log('Successfully connected to Database!');
    start();
  })
  .catch((e) => console.error(e));








