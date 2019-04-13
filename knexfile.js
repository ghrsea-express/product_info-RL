// Update with your config settings.

module.exports = {
  
  development: {
    client: 'mysql',
    connection: {
      host: "localhost",
      user: 'root',
      database: 'ghrseaexpress_product',
      port: 3306
    },
    migrations: {
      directory: __dirname+'/db/migrations'
    },
    seeds: {
      directory: __dirname+'/db/seeds'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: "database",
      user: 'root',
      password: 'kqed',
      database: 'ghrseaexpress_product',
      port: 3306
    },
    migrations: {
      directory: __dirname+'/db/migrations'
    },
    seeds: {
      directory: __dirname+'/db/seeds'
    }
  }

};
