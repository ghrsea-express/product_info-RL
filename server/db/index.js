const env = process.env.NODE_ENV || 'development'
const config = require('../../knexfile.js')
const knex = require('knex')(config[env])

const getDataById = (id) => {
    return knex('inventory').where('id', id)
}

module.exports = {getDataById}
