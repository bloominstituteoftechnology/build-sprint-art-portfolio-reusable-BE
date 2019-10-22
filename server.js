const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const authRoutes = require('./config/login-register-routes')
const authenticate = require('./auth/authenticate')
const artRoutes = require('./config/art-routes');
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/auth', authenticate, authRoutes );
server.use('/art', artRoutes);


server.get('/', (req, res) => {
    res.send('Hi! Yes, hello. I am working.')
})


module.exports = server;
