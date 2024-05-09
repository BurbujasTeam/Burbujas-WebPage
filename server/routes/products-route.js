const express = require("express");
const { getProducts } = require("../controllers/products-controller");

const productsRouter = express.Router();

productsRouter.get("/products", getProducts);

module.exports = productsRouter;
