const express = require('express');
const Cart = require('../models/cart.model');

const cartRoute=express.Router();



cartRoute.get("/",async(req,res)=>{
    try {
        const allCart = await Cart.find().populate("productId");
        console.log(allCart)
            if (!allCart) {
                return res.status(400).json({
                    status: "Invalid",
                    msg: "Cart Not Found",
                })
            }
            res.status(200).json({
                status: "success",
                data: cart
            })
    } catch (error) {
        return res.status(500).send({
            status:"error",
            message:"Internal Server Error"
        })
    }
})
cartRoute.post("/",async(req,res)=>{
    try {
        const {productId} = req.body.items[0];
        const quantity=Number.parseInt(req.body.quantity)
        // const cartItem = await Cart.find({brand:cart.brand});
        // console.log(cartItem)
        // if(cartItem){
        //     res.send({
        //         status: "error",
        //         message:"Item is already in Your cart"
        //     }) 
        // }else{
        //     await Cart.create(cartItem);
        //     return res.send({
        //         status: "success",
        //         data:cartItem
        //     }) 
        // }
    } catch (error) {
        return res.status(500).send({
            status:"error",
            message:"Internal Server Error"
        })
    }
})

module.exports = cartRoute;