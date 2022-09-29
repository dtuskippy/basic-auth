'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const usersSchema = require('./users.schema');
// const bcrypt = require('bcrypt');



// NOTE: connected to sqlite::memory out of box for proof of life
// TODO:
// connect postgres for local dev environment and prod
// handle SSL requirements
// connect with sqlite::memory for testing
// const DATABASE_URL = 'sqlite::memory'
const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite::memory' // two colons allows for NO persistance
  : 'sqlite:memory'; // one colon allows us to persist - useful today


// instantiates database (create an instance/singleton)

let options = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: true,
    rejectUnauthorized: false,
  },
} : {};


const sequelizeDatabase = new Sequelize(DATABASE_URL, options);


const UsersModel = usersSchema(sequelizeDatabase, DataTypes);

// UsersModel.beforeCreate((user) => {
//   console.log('our user', user);
// });
// UsersModel.beforeCreate(async (User) => {
//   let hashedPass = bcrypt.hash(User.password, 10);
//   User.password = hashedPass;
// });

module.exports = {sequelizeDatabase, UsersModel};






