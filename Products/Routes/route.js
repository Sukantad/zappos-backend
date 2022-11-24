
const {Router}=require('express');
const { product_model } = require('../Models/prodModel');

const prodRouter=Router();

prodRouter.get("/products/:category",async(req,res)=>{
    let {category}=req.params;
    
    let products=await product_model.find({category:category})
    
    res.send({
        Products:products
    })
});
module.exports=prodRouter