const express = require("express");
const httpProxy = require("http-proxy");
const config = require('./config');
const authMiddleware = require("./middlewares/authMiddleware");
const roleMiddleware = require("./middlewares/roleMiddleware");

const proxy = httpProxy.createProxyServer();
const app = express();

// Route requests to the auth service
app.use("/auth", (req, res) => {
  proxy.web(req, res, { target: config.authUrl });
});

// Route requests to the product service
// Allow both buyer and seller to view products
app.use("/product/view", authMiddleware, (req, res) => {
  proxy.web(req, res, { target: `${config.productUrl}/view` });
});

// Allow only seller to update products
app.use("/product", authMiddleware, roleMiddleware("seller"), (req, res) => {
  proxy.web(req, res, { target: config.productUrl });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`API Gateway listening on port ${port}`);
});