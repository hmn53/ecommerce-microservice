const express = require("express");
const config = require("./config");
const ProductController = require("./controllers/productController");

class App {
    constructor() {
        this.app = express();
        this.setMiddlewares();
        this.productController = new ProductController();
        this.setRoutes();
    }

    start() {
        this.server = this.app.listen(config.port, () => console.log(`Product server listening on port ${config.port}`));
    }

    setMiddlewares() {
        this.app.use(express.json());
    }

    setRoutes() {
        this.app.get("/view", (req, res) => this.productController.getProducts(req, res));
    }
}

module.exports = App;