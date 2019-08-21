// Update with your config settings.

module.exports = {
  
  development: {
    client: 'mysql',
    connection: {
      host: "127.0.0.1",
      user: 'root',
      password: '',
      database: 'ghrseaexpress_product'
    },
    migrations: {
      directory: __dirname+'/db/migrations'
    },
    seeds: {
      directory: __dirname+'/db/seeds'
    }
  }

};
