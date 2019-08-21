const config = require('../../knexfile.js')
const knex = require('knex')(config.development)

const getDataById = (id) => {
    return knex('inventory').where('id', id)
}

module.exports = {getDataById}
