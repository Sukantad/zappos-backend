const { Router } = require("express");
const {
  getProducts,
  getProductById,
} = require("../controllers/product.controllers");

const productRouter = Router();

productRouter.get("/", getProducts);
productRouter.get("/:id", getProductById);
module.exports = productRouter;
