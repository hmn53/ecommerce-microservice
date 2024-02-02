const ProductRepository = require("../repositories/productRepository");

class ProductService {
    constructor() {
        this.productRepository = new ProductRepository();
    }

    async getProducts() {
        const products = await this.productRepository.getAllProducts();

        return { success: true, products };
    }
}

module.exports = ProductService;