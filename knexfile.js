// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './art.db3'
    },
    useNullAsDefault: true,
  },

    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: '/data/migrations',
      tableName: 'art'
    },
  

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: '/data/migrations',
      tableName: 'art'
    }
  }

};
