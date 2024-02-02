const express = require("express");
const httpProxy = require("http-proxy");
const config = require('./config');

const proxy = httpProxy.createProxyServer();
const app = express();

// Route requests to the auth service
app.use("/auth", (req, res) => {
  proxy.web(req, res, { target: config.authUrl });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`API Gateway listening on port ${port}`);
});