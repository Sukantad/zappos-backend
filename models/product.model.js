const mongoose = require("mongoose");

const product_schema = new mongoose.Schema({
  imageUrl: { type: String },
  desc: { type: String },
  ratings: { type: String },
  brand: { type: String },
  price: { type: Number },
  cuttoff_price: { type: Number },
  category: { type: String },
});
const product_model = mongoose.model("products", product_schema);

module.exports = { product_model };
