const express = require("express");
const config = require("./config");
const validateMiddleware = require("./middlewares/validateMiddleware");
const getUserMiddleware = require("./middlewares/getUserMiddleware");

class App {
    constructor() {
        this.app = express();
        this.setMiddlewares();
        this.setRoutes();
    }

    start() {
        this.server = this.app.listen(config.port, () => console.log(`Order server listening on port ${config.port}`));
    }

    setMiddlewares() {
        this.app.use(express.json());
        this.app.use(getUserMiddleware);
    }

    setRoutes() {

    }
}

module.exports = App;