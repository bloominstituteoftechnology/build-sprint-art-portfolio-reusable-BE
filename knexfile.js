// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './art.db3'
    },
    debug: true,
    useNullAsDefault: true,
    migrations:{
      directory: './migrations',
      tableName: 'dbmigrations'
    },
    seeds: {
      directory: './seeds'
    },
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './art.db3'
    },
    debug: true,
    useNullAsDefault: true,
    migrations:{
      directory: './migrations',
      tableName: 'dbmigrations'
    },
    seeds: {
      directory: './seeds'
    },

  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    debug: true,
    migrations:{
      directory: './migrations',
      tableName: 'dbmigrations'
    },
    seeds: {
      directory: './seeds'
    },
    
  }
}
 