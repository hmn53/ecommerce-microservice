const Product = require("../models/product");

class ProductRepository {
    async getAllProducts() {
        return await Product.query();
    }

    async getById(id) {
        return await Product.query()
            .findById(id);
    }

    async createProduct(product) {
        return await Product.query()
            .insert(product)
            .returning('*');
    }

    async updateProduct(id, product) {
        return await Product.query()
            .findById(id)
            .patch(product)
            .returning("*")
            .first();
    }

    async deleteProduct(id) {
        await Product.query()
            .deleteById(id);
    }
}

module.exports = ProductRepository;