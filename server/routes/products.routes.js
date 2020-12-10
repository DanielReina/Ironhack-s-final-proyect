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

router.put('/editProduct/:product_id', (req, res) => {

    Product
        .findByIdAndUpdate(req.params.product_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.get('/productBySeller/:user_id', (req, res, next) => {
    Product
        .find({"seller": req.params.user_id})
        .then(response => res.json(response))
        .catch(err => next(new Error(err)))
})


router.delete('/deleteProduct/:product_Id', (req, res, next) => {
    const productId = req.params.product_Id
    console.log('aqui estoy', productId)
    Product
        .findByIdAndDelete(productId)
        .then(response => res.json(response))
        .catch(err => next(new Error(err)))
})





module.exports = router