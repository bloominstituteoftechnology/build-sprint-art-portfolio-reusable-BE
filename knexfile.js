// Update with your config settings.

module.exports = {

  testing: {
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
   
    migrations:{
      directory: './migrations',
      
    },
    seeds: {
      directory: './seeds'
    },
    useNullAsDefault: true
  }
}
// [process.env.NODE_ENV || 'development'];
 