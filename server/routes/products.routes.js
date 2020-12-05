const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Product = require('./../models/product.model')

router.get('/', (req, res) => {

    Product
        .find()
        .then(response =>res.json(response))
        .catch(err => res.status(500).json(err))

})

router.get('/getOneProduct/:product_id', (req, res) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.product_id)) {
        res.status(404).json({ message: 'Invalid ID' })
        return
    }

    Product
    .findById(req.params.product_id)
    .then(response =>res.json(response))
    .catch(err => res.status(500).json(err))

})

router.post('/newProduct', (req, res) =>{   

    Product
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))

})




module.exports = router