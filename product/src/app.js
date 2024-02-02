const express = require("express");
const config = require("./config");

class App {
    constructor() {
        this.app = express();
        this.setMiddlewares();
    }

    start() {
        this.server = this.app.listen(config.port, () => console.log(`Auth server listening on port ${config.port}`));
    }

    setMiddlewares() {
        this.app.use(express.json());
    }
}

module.exports = App;