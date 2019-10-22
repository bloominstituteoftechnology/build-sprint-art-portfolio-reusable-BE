// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './art.db3'
    },
    useNullAsDefault: true,
    mifrations:{
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
    useNullAsDefault: true,
    mifrations:{
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
    
    mifrations:{
      directory: './migrations',
      tableName: 'dbmigrations'
    },
    seeds: {
      directory: './seeds'
    },
  }
}
 