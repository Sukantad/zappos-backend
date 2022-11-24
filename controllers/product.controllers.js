const { product_model } = require("../models/product.model");

exports.getProducts = async(req,res)=>{
    let {category}=req.params;
    
    let products=await product_model.find({category:category})
    
    res.send({
        Products:products
    })
}