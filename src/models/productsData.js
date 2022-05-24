const mongoose = require('mongoose')

const ProductDataSchema =  new mongoose.Schema( {
    nomeProduct: String,
    tipoProduct: String, 
})

module.exports = mongoose.model('Products', ProductDataSchema)