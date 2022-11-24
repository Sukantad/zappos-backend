const express = require('express');
const Cart = require('../models/cart.model');

const cartRoute=express.Router();


cartRoute.get("/:userId",async(req,res)=>{
    const {userId}=req.params;
    // console.log(userId);
    try {
        const cart = await Cart.findOne({userId:userId})//problem in populate
        console.log(cart.userId)
            if (cart && cart.products.length>0) {
                res.status(200).send({
                    status: "success",
                    data: cart
                })
            }else{
                return res.status(200).send({
                    status: "Invalid",
                    message: "Cart is Empty",
                })
            }
    } catch (error) {
        return res.status(500).send({
            status:"error",
            message:"Internal Server Error"
        })
    }
})
cartRoute.delete("/:userId",async(req,res)=>{
    const {userId} = req.params;
    const productId = req.query.productId;
    try {
       let cart = await Cart.findOne({ userId:userId });
       const itemIndex = cart.products.findIndex((item) => item.productId == productId);
    if (itemIndex > -1) {
         let item = cart.products[itemIndex];
         cart.total -= item.quantity * item.price;
    if(cart.total < 0) {
          cart.total = 0
    }
    cart.products.splice(itemIndex, 1);
    cart.total = cart.products.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
    },0)
        cart = await cart.save();
        res.status(200).send({
            status:"successfully deleted"
        });
    } else {
        res.status(404).send({
            status:"error",
            message:"item not found"
        });
    }
    } catch (error) {
       console.log(error);
       return res.status(500).send({
        status:"error",
        message:"Internal Server Error"
       })
    }
});
// cartRoute.post("/",async(req,res)=>{
//     try {
//         console.log(req.body)
//         await Cart.create(req.body);
//         return res.status(200).send("message")
//     } catch (error) {
//         return res.status(500).send(error)
//     }
// })
// cartRoute.post("/",async(req,res)=>{
//     const {productId,userId} = req.body;
//     const quantity=Number.parseInt(req.body.quantity)
//     try {
//         const cart = await Cart.findOne(userId);
//         // product schema needed
//         // const product = await Product.findOne(productId)
//         // product exist or not
//         if(!product){
//             return res.status(400).send({
//                 status: "Invalid",
//                 message: "product not found",
//             })
//         }
//         const price = product.price;
//         const brand = product.brand;

//         //if cart exist
//         if(cart){
//             const productIndex=cart.products.findIndex(product => product.productId===productId)
//             if(productIndex>-1){
//                 let item = cart.products[productIndex];
//                 item.quantity+=quantity;
//                 cart.total=cart.products.reduce((acc,curr)=>{
//                     return acc+curr.quantity*curr.price;
//                 },0)
//                 cart.products[productIndex]=item;
//                 await cart.save();
//                 res.status(200).send({
//                     status:"updated",
//                     data:cart
//                 })
//             }else{
//                 //if cart not exist
//                 const newCart = await Cart.create({
//                     userId,
//                     products:[{productId,quantity}],
//                     total:quantity*price
//                 })
//                 res.status(201).send({
//                     status:"success",
//                     data:newCart
//                 })
//             }

//         }
//     } catch (error) {
//         return res.status(500).send({
//             status:"error",
//             message:"Internal Server Error"
//         })
//     }
// })

cartRoute.patch("/:userId",async(req,res)=>{
    const {userId}=req.params;

})

module.exports = cartRoute;