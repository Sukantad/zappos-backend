const { product_model } = require("../models/product.model");

exports.getProducts = async (req, res) => {
  try {
    let queries = req.query;

    if (
      Number(queries.page) &&
      Number(queries.limit) &&
      queries.q != null &&
      queries.sort != null &&
      queries.order != null
    ) {
   
      let a = 1;
      if (queries.order == "desc") {
        a = -1;
      }
      const product = await product_model
      .find({desc:new RegExp(queries.q,"i")})
        .sort({ price: a })
        .skip(
          Number(queries.limit) * Number(queries.page) - Number(queries.limit)
        )
        .limit(queries.limit);
      return res.send(product);
    }
    if (queries.page && queries.limit && queries.q != null) {
      const product = await product_model
      .find({desc:new RegExp(queries.q,"i")})
        .skip(
          Number(queries.limit) * Number(queries.page) - Number(queries.limit)
        )
        .limit(queries.limit);
      return res.send(product); 
    }
    if (
      queries.page &&
      queries.limit &&
      queries.sort != null &&
      queries.order != null
    ) {
      console.log("here");
      let a = 1;
      if (queries.order == "desc") {
        a = -1;
      }
      const product = await product_model
        .find()
        .sort({ price: a })
        .skip(
          Number(queries.limit) * Number(queries.page) - Number(queries.limit)
        )
        .limit(queries.limit);
      return res.send(product);
    }
    if (queries.q != null && queries.sort != null && queries.order != null) {
      let a = 1;
      if (queries.order == "desc") {
        a = -1;
      }
      const product = await product_model
      .find({desc:new RegExp(queries.q,"i")})
        .sort({ price: a });
      return res.send(product);
    }
    if (queries.q) {
      console.log(queries.q)
    const product = await product_model.find({desc:new RegExp(queries.q,"i")});

      return res.send(product);
    }
    if (queries.sort === "price" && queries.order != "") {
      let a = 1;
      if (queries.order == "desc") {
        a = -1;
      }
      const product = await product_model.find().sort({ price: a });
      return res.send(product);
    }
  //  if()

  if (
    Number(queries.page) &&
    Number(queries.limit)){
      const product = await product_model
      .find().skip( Number(queries.limit) * Number(queries.page) - Number(queries.limit)
      )
      .limit(queries.limit);
    return res.send(product);
    }

    const product = await product_model.find();
    return res.send(product);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};