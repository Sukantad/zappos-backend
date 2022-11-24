
const {Router}=require('express');
const { getProducts } = require('../controllers/product.controllers');


const productRouter=Router();

productRouter.get("/:category",getProducts);
module.exports=productRouter