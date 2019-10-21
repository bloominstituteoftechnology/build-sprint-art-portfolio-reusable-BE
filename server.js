const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const configureRoutes = require('./config/login-register-routes');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

configureRoutes(server);

server.get('/', (req, res) => {
    res.send('Hi! Yes, hello. I am working.')
})

module.exports = server;