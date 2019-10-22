

const server = require('./server');

const port = process.env.PORT || 3200;

server.listen(port, () => {
    console.log(`It's working`);
});






