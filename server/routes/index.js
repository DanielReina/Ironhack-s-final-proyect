module.exports = app => {
    app.use('/api/products', require('./products.routes.js'))
    app.use('/api/users', require('./users.routes.js'))
    app.use('/api/auth', require('./auth.routes.js'))
    app.use('/api/files', require('./files.routes.js'))   
}