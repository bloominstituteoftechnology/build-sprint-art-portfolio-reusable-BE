const route = require('express').Router();
const  bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../data/helpers/login-route-helper');
const secret = require('./secrets');
route.post('/login', (req, res) => {
    let {username, password} = req.body;
    Users.findBy({username})
    .first()
    .then(user => {
        if(user && bcrypt.compareSync(password, user.password)){
            const token = generateToken(user);
            res.status(200).json({
                message: `Welcome ${user.username}`
            });
        }else{
            res.status(401).json({
                message: 'Who are you?'
            });
        }
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

route.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 6);
    user.password = hash;

    Users.add(user)
    .then(saved => {
        res.status(201).json({
            message: 'Added'
        });
    })
    .catch(err => {
        res.status(500).json({
            message: 'Sorry you cannot be added at this time. Try again later.', err
        });
    });
});

function generateToken(user){
    const payload = {
        username: user.username,
        subject: user.id,
    };
    const options = {
        expiresIn: '6h'
    }
    return jwt.sign(payload, secret.jwtSecret, options);
}

module.exports = router;