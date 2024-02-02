const ProductService = require("../services/productService");

class ProductController {
    constructor() {
        this.productService = new ProductService();
    }

    async getProducts(_req, res) {
        try {
            const result = await this.productService.getProducts();

            res.json({ products: result.products });
        }
        catch (err) {
            res.status(500).json({ message: "Internal Server error" });
        }
    }
}

module.exports = ProductController;