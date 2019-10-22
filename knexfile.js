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

};
