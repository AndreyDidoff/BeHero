const knex = require('knex');
const consiguration = require('../../knexfile');

const connection = knex(consiguration.development);
module.exports = connection;