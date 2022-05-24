const express = require ('express')
const routes = express.Router()
const ProductsController = require('./controllers/ProductsController')


//rota product
routes.post('/product', ProductsController.create)
routes.get('/product', ProductsController.read)
routes.delete('/product/:id', ProductsController.delete)
module.exports = routes