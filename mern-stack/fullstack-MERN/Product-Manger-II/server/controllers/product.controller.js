const { Product } = require('../models/product.model');

module.exports.index = (request, response) => {
    Product.find()
        .then(allProducts => response.json(allProducts))
        .catch(err => response.status(400).json(err));
};

module.exports.createProduct = (request, response) => {
    const { title, price, description } = request.body;
    Product.create({
        title,
        price,
        description
    })
    .then(product => response.json(product))
    .catch(err => response.status(400).json(err));
};

module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}