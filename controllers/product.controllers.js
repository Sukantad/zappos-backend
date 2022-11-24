const { product_model } = require("../models/product.model");

exports.getProducts = async (req, res) => {
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
    // rating sorting
    if (queries.sort === "ratings" && queries.order != "") {
      let a = 1;
      if (queries.order === "desc") {
        a = -1;
      }
      const product = await product_model.find().sort({ ratings: a });
      return res.send(product);
    }
    // search
    // if (queries.q != "") {
    //   var qu = queries.q;
    //   console.log(qu);

    //   const product = await product_model.find({
    //     $text: { $search: queries.q },
    //   });
    //   return res.send(product);
    // }
    // pagination
    if (
      queries.page &&
      queries.limit &&
      queries.sort == "price" &&
      queries.order != null
    ) {
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
    // only pagination
    if (queries.page && queries.limit) {
      const product = await product_model
        .find()
        .skip(
          Number(queries.limit) * Number(queries.page) - Number(queries.limit)
        )
        .limit(queries.limit);
      return res.send(product);
    }
    else{
      const product = await product_model.find();
      return res.send(product)
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
