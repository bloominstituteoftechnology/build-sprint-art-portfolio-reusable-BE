require('dotenv').config();
const dbENV = process.env.DB_ENV || 'development';
const config = require('./data/dbConfig')[dbENV]
const port = process.env.PORT || 3200;
const server = require('./server');



server.listen(config.server);






