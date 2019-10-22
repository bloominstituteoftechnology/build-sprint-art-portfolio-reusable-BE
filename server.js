const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const authRoutes = require('./config/login-register-routes')
const configureRoutes = require('./config/login-register-routes');
const artRoutes = require('./config/art-routes').default;
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/auth', authRoutes);
server.use('/art', artRoutes);
configureRoutes(server);

server.get('/', (req, res) => {
    res.send('Hi! Yes, hello. I am working.')
})


module.exports = router;
