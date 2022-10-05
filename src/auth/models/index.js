'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const usersSchema = require('./users.schema');

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite::memory'
  : 'sqlite:memory';


let options = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: true,
    rejectUnauthorized: false,
  },
} : {};

const sequelizeDatabase = new Sequelize(DATABASE_URL, options);

const UsersModel = usersSchema(sequelizeDatabase, DataTypes);

module.exports = {sequelizeDatabase, UsersModel};






