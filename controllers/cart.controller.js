const Cart = require("../models/cart.model");
const { product_model } = require("../models/product.model");
const user = require("../models/user.model");

exports.getCart = async (req, res) => {
  const { userId } = req.params;
  try {
    const cart = await Cart.find({ userId: userId }).populate("productId"); //populate in user not working
    if (cart && cart.length > 0) {
      res.status(200).send({
        status: "success",
        data: cart,
      });
    } else {
      return res.status(200).send({
        status: "error",
        message: "User Not Found",
      });
    }
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

exports.addToCart = async (req, res) => {
  const userId = req.body.userId;
  const { productId } = req.params;
  try {
    const cart = await Cart.findOne({ userId: userId, productId: productId });
    if (cart) {
      const quant = await Cart.findOne({
        userId: userId,
        productId: productId,
      });
      const item = await Cart.findOneAndUpdate(
        { userId: userId, productId: productId },
        { quantity: quant?.quantity + 1 },
        { new: true }
      ).populate("productId");
      return res.status(200).send({
        status: "success",
        message: item,
      });
    } else {
      const newItem = await Cart.create({
        userId: userId,
        productId: productId,
        quantity: 1,
      });
      return res.status(200).send({
        status: "success",
        data: newItem,
      });
    }
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

exports.cartQuantity = async (req, res) => {
  const userId = req.body.userId;
  const { productId } = req.params;
  const quantity = Number(req.body.quantity);
  try {
    const cart = await Cart.findOneAndUpdate(
      { userId: userId, productId: productId },
      { quantity: quantity },
      { new: true }
    ).populate("productId");
    if (!cart) {
      return res.status(400).send({
        status: "error",
        data: "Product Doesn't Exist in Cart",
      });
    }
    return res.status(200).send({
      status: "success",
      data: cart,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

exports.deleteOneProduct = async (req, res) => {
  const userId = req.body.userId;
  const { productId } = req.params;
  try {
    const cart = await Cart.deleteOne({ userId: userId, productId: productId });
    console.log(cart);
    if (cart) {
      return res.status(200).send({
        status: "success",
        message: "Deleted Successfully",
      });
    } else {
      return res.status(400).send({
        status: "error",
        message: "Item not Found",
      });
    }
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Internal Server Error",
    });
  }
};
exports.deleteAllCartProduct = async (req, res) => {
  const userId = req.body.userId;
  console.log("userId ", userId);
  try {
    const cart = await Cart.deleteMany({ userId: userId });
    console.log(cart);
    if (cart) {
      return res.status(200).send({
        status: "success",
        message: "Deleted Successfully",
      });
    } else {
      return res.status(400).send({
        status: "error",
        message: "Item not Found",
      });
    }
  } catch (error) {
    return res.status(500).send({
      status: "error",
      message: "Internal Server Error fsdf",
    });
  }
};
