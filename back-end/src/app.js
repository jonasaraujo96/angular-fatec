'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const mysql = require('mysql');
const app = express();
const router = express.Router();
const logger = require('morgan');

app.use(logger('tiny'))
app.use(bodyParser.json({
  limit: '10mb'
}));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Enable CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials'), true
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  next();
});

const livros = require('./../src/routes/livros');
const autores = require('./../src/routes/autores');
const editoras = require('./../src/routes/editoras');

app.use('/livros', livros);
app.use('/autores', autores);
app.use('/editoras', editoras);

module.exports = app;
