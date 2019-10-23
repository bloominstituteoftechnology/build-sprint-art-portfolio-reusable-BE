// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './art.db3'
    },
    
    useNullAsDefault: true,
    migrations:{
      directory: './migrations',
      
    },
    seeds: {
      directory: './seeds'
    },
  },
  
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL ,
    debug: true,
    pool:{
      min: 2,
      max: 10
    },
    migrations:{
      directory: './migrations',
      
    },
    seeds: {
      directory: './seeds'
    },
    useNullAsDefault: true
  }
}
 