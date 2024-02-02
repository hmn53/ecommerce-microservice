require("dotenv").config();

module.exports = {
    authUrl: process.env.AUTH_URL,
    orderUrl: process.env.ORDER_URL,
    productUrl: process.env.PRODUCT_URL,
    port: process.env.PORT || 5000
};