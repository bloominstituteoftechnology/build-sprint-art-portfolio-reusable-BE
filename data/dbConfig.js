const knex = require('knex');

const knexConfig = require('../knexfile.js');
console.log(knexConfig)
const dbENV = process.env.NODE_ENV || 'development';

module.exports = knex(knexConfig);

