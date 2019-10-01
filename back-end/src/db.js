'use strict'

const Sequelize = require('sequelize');
const sequelize = new Sequelize('db_livros', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  timezone: '-03:00', // for writing to database
  logging: false
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Autenticação OK');
  })
  .catch(err => {
    console.error('********** Não autenticado: ', err);
  });

module.exports = sequelize;
