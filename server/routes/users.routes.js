const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../models/user.model')


router.get('/', (req, res) => {

    User
        .find({}, {username: 1})
        .then(response =>res.json(response))
        .catch(err => res.status(500).json(err))

})

router.get('/getOneUser/:id', (req, res) => {

    User
    .findById(req.params.id)
    .then(response =>res.json(response))
    .catch(err => res.status(500).json(err))

})



module.exports = router