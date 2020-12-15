const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('./../models/user.model')
const Product = require('./../models/product.model')
const { checkId } = require('./middlewares.js')

router.get('/', (req, res) => {

    Product
        .find({}, {mainImage: 1, description: 1, title:1, salesMethod: 1, initialPrice: 1, category:1, timeLimit: 1, currentBid: 1, currentBidder:1, seller: 1})
        .then(response =>res.json(response))
        .catch(err => res.status(500).json(err))

})

router.get('/getOneProduct/:id', checkId,(req, res) => {
 
    Product
        .findById(req.params.id)
        .then(response =>res.json(response))
        .catch(err =>{
            console.log(err)
            res.status(500).json(err)})

})

router.post('/newProduct', (req, res) =>{   

    Product
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))

})

router.put('/editProduct/:id', checkId,(req, res) => {

    Product
        .findByIdAndUpdate(req.params.id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.get('/productBySeller/:id', checkId,(req, res) => {
    Product
        .find({"seller": req.params.id})
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.delete('/deleteProduct/:id', checkId,(req, res) => {
    const productId = req.params.id

    Product
        .findByIdAndDelete(productId)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put('/current-bid/:id', checkId,(req, res) => {

    let data = req.body
  data.currentBidder = req.user._id
  
    Product
        .findByIdAndUpdate(req.params.id, data)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})



module.exports = router