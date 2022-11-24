
const {Router}=require('express');
const { getProducts } = require('../controllers/product.controllers');


const productRouter=Router();

productRouter.get("/",getProducts);
module.exports=productRouter