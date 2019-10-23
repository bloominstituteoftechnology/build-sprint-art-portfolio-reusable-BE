const axios = require('axios');
const router = require('express').Router();
const Work = require('../data/helpers/art-route-helper')
const express = require('express')
const jwt = require('jsonwebtoken')
const secret = require('./secrets');
router.get('/', (req,res) => {
    Work.find()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.send(err)
    })
});

router.get('/:id', (req,res) =>{
    const id = req.params.id;
    Work.findById(id)
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.send(err)
    })
})

router.put('/:id', (req,res) => {
    const art = req.params.id;
    Work.update(art, req.body)
    .then(data => {
        res.send(201).json({
            message: "Update Successful",
            New_Data: data
        })
    })
    .catch(err => {
        console.log(err)
    })
})

router.post('/add', (req,res) => {
    const art = req.body;
    Work.add(art)
    .then(data => {
        res.status(201).json(data);
    })
    .catch(err => {
        res.status(500).json({message: "FAIL",
        Error: err})
    })
})
module.exports = router;


