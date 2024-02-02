const express = require("express");
const config = require("./config");
const User = require("./models/user");

class App {
    constructor() {
        this.app = express();
    }

    start() {
        this.server = this.app.listen(config.port, () => console.log(`Auth server started on port ${config.port}`));
    }
}

module.exports = App;