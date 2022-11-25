const express = require('express');
const { getCart, addToCart, deleteOneProduct, cartQuantity } = require('../controllers/cart.controller');

const cartRoute=express.Router();

//for getting all the cart products as per userid
cartRoute.get("/:userId",getCart)

//for adding product to the cart
cartRoute.post("/:productId",addToCart)

//for changing the quantity of the product in the cart
cartRoute.patch("/:productId",cartQuantity)

//for deleting the product from the cart
cartRoute.delete("/:productId",deleteOneProduct)

module.exports = cartRoute;