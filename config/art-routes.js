const route = require('express').Route();
const db = require('../data/helpers/art-route-helper');
route.get('/art', restricted, (req,res) => {
    db.find()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        console.log(err)
    });
});

route.post('/art/create', restricted, (req, res) => {
    const project = req.body;
    db.add(project).then(data => {
        res.status(200).json({
            message: 'Posted',
            New_Data: data
        })
    })
    .catch(err => {
        console.log(err);
    });
});

route.put('/art/update', restricted, (req, res) => {
    
})

route.remove('/art/delete', restricted, (req, res) =>{

})