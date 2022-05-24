const Products = require ('../models/productsData')

module.exports = {

    async read (request, response) {
        const productList = await Products.find()
        return response.json(productList)

    },
    async create(request, response) {
        
        const {nomeProduct, tipoProduct} = request.body

        if (!nomeProduct||!tipoProduct) {
            return response.status(400).json({ error: "Falta dados"})
        }

        const productCreated = await Products.create({
            nomeProduct, 
            tipoProduct
        })

        return response.json(productCreated)

    },

    async delete(request, response) {
        const {id} = request.params; 
        const productDeleted = await Products.findOneAndDelete({_id : id})

        if (productDeleted) {
            return response.json(productDeleted)
        } return response.status(401).json({error: 'Não foi encontrado o registro'})
    }

    
}