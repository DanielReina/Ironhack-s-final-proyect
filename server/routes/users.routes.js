const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../models/user.model')


router.get('/', (req, res) => {

    User
        .find()
        .then(response =>res.json(response))
        .catch(err => res.status(500).json(err))

})

router.get('/getOneUser/:user_id', (req, res) => {

    User
    .findById(req.params.user_id)
    .then(response =>res.json(response))
    .catch(err => res.status(500).json(err))

})



module.exports = router