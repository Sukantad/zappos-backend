const mongoose = require('mongoose');


const itemSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"
    },
    quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity can not be less then 1.']
    },
    price: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true,
    }
},{
    timestamps:true
})
const cartSchema = new mongoose.Schema({
    items:[itemSchema],
    subTotal:{
        default:0,
        type:Number
    }
})

const Cart = new mongoose.model("cart",cartSchema)
module.exports=Cart;