const config = require('../../../knexfile')
const knex = require('knex')

const connectin = knex(config.development)

module.exports = connectin