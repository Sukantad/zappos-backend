const { product_model } = require("../models/product.model");

// exports.getProducts = async (req, res) => {
//   try {
//     let queries = req.query;

//     if (
//       Number(queries.page) &&
//       Number(queries.limit) &&
//       queries.q != null &&
//       queries.sort != null &&
//       queries.order != null
//     ) {

//       let a = 1;
//       if (queries.order == "desc") {
//         a = -1;
//       }
//       const product = await product_model
//       .find({desc:new RegExp(queries.q,"i")})
//         .sort({ price: a })
//         .skip(
//           Number(queries.limit) * Number(queries.page) - Number(queries.limit)
//         )
//         .limit(queries.limit);
//       return res.send(product);
//     }
//     if (queries.page && queries.limit && queries.q != null) {
//       const product = await product_model
//       .find({desc:new RegExp(queries.q,"i")})
//         .skip(
//           Number(queries.limit) * Number(queries.page) - Number(queries.limit)
//         )
//         .limit(queries.limit);
//       return res.send(product);
//     }
//     if (
//       queries.page &&
//       queries.limit &&
//       queries.sort != null &&
//       queries.order != null
//     ) {
//       console.log("here");
//       let a = 1;
//       if (queries.order == "desc") {
//         a = -1;
//       }
//       const product = await product_model
//         .find()
//         .sort({ price: a })
//         .skip(
//           Number(queries.limit) * Number(queries.page) - Number(queries.limit)
//         )
//         .limit(queries.limit);
//       return res.send(product);
//     }
//     if (queries.q != null && queries.sort != null && queries.order != null) {
//       let a = 1;
//       if (queries.order == "desc") {
//         a = -1;
//       }
//       const product = await product_model
//       .find({desc:new RegExp(queries.q,"i")})
//         .sort({ price: a });
//       return res.send(product);
//     }
//     if (queries.q) {
//       console.log(queries.q)
//     const product = await product_model.find({desc:new RegExp(queries.q,"i")});

//       return res.send(product);
//     }
//     if (queries.sort === "price" && queries.order != "") {
//       let a = 1;
//       if (queries.order == "desc") {
//         a = -1;
//       }
//       const product = await product_model.find().sort({ price: a });
//       return res.send(product);
//     }
//   //  if()

//   if (
//     Number(queries.page) &&
//     Number(queries.limit)){
//       const product = await product_model
//       .find().skip( Number(queries.limit) * Number(queries.page) - Number(queries.limit)
//       )
//       .limit(queries.limit);
//     return res.send(product);
//     }

//     const product = await product_model.find();
//     return res.send(product);
//   } catch (error) {
//     return res.status(500).send(error.message);
//   }
// };

exports.getProducts = async (req, res) => {
  try {
    let data = await product_model.find();
    const length = await product_model.find().count();
    let page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || length;
    const search = req.query.q || "";
    let sort = req.query.sort || "";
    let order = req.query.order || "";
    let range = req.query.range || "";
    let lte = Number(req.query.lte) || 200000000;
    let gte = Number(req.query.gte) || 0;
    let filter = req.query || {};
    delete filter.sort;
    delete filter.limit;
    delete filter.q;
    delete filter.page;
    delete filter.order;
    delete filter.range;
    delete filter.lte;
    delete filter.gte;
    if (range.length > 0) {
      filter[range] = { $gte: gte, $lte: lte };
    }

    let sortBy = {};
    if (order === "asc") {
      sortBy[sort] = 1;
    } else if (order === "desc") {
      sortBy[sort] = -1;
    }

    data = await product_model
      .find({ ...filter, desc: { $regex: search, $options: "i" } })
      .sort(sortBy)
      .skip(page * limit)
      .limit(limit);
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send({
      status: "Failed",
      message: "Server Error",
    });
  }
};

exports.getProductById = async (req, res) => {
  try {
    let data = await product_model.findById(req.params.id);
    res.send(data);
  } catch (error) {
    return res.status(500).send({
      status: "Failed",
      message: "Server Error",
    });
  }
};
