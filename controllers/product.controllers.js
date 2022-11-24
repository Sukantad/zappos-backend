const { product_model } = require("../models/product.model");

exports.getProducts = async(req,res)=>{
   
try {
     let queries = req.query;
     // price sorting 
     if (queries.sort === "price" && queries.order != "") {
        let a = 1;
        if (queries.order == "desc") {
          a = -1;
        }
        const product = await product_model.find().sort({ price: a });
        return res.send(product);
      }
      if(queries.sort==="ratings" && queries.order!=""){
        let a=1;
        if(queries.order==="desc"){
          a= -1;
        }
        const product=await product_model.find().sort({ratings: a});
        return res.send(product);
      }
} catch (error) {
    return res.status(500).send(error.message);
}
}