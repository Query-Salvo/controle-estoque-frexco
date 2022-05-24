const mongoose = require('mongoose')
const dbConfig = 'mongodb+srv://desafio-frexco:123@desafio-frexco.nd6pt.mongodb.net/?retryWrites=true&w=majority'

const  connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true

})

module.exports = connection
