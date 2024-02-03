const express = require("express");
const config = require("./config");
const ProductController = require("./controllers/productController");
const validateMiddleware = require("./middlewares/validateMiddleware");
const { createProductSchema, updateProductSchema } = require("./validators/productValidator");
const getUserMiddleware = require("./middlewares/getUserMiddleware");

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
        this.app.use(getUserMiddleware);
    }

    setRoutes() {
        this.app.get("/view", (req, res) => this.productController.getProducts(req, res));
        this.app.get("/view/:id", (req, res) => this.productController.getProduct(req, res));

        this.app.post("/", validateMiddleware(createProductSchema), (req, res) => this.productController.createProduct(req, res));
        this.app.put("/:id", validateMiddleware(updateProductSchema), (req, res) => this.productController.updateProduct(req, res));
        this.app.delete("/:id", (req, res) => this.productController.deleteProduct(req, res));
    }
}

module.exports = App;