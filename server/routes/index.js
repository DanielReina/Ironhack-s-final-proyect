module.exports = app => {

    app.use('/api/products', require('./products.routes.js'))
    app.use('/api/auth', require('./auth.routes.js'))
   
}