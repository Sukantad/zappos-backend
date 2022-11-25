const mongoose = require('mongoose');
const ObjectID=mongoose.Schema.ObjectId;

const cartSchema = new mongoose.Schema({
        userId:{
            type:ObjectID,
            required:true,
            ref:'users'
        },
        productId:{
                type:ObjectID,
                ref:"products",
                required:true
        },
        quantity:{
            type:Number
        }
    },{
        timestamps:true
    })

// const cartSchema = new mongoose.Schema({
//     userId:{
//         type:ObjectID,
//         required:true,
//         ref:'users'
//     },
//     products:[{
//         productId:{
//             type:ObjectID,
//             ref:"products",
//             required:true
//         },
//         quantity:{
//             type:Number,
//             required:true,
//             min:1,
//             default:1
//         }
//     }],
//     total:{
//         type:Number,
//         required:true,
//         default:0
//     }
// },{
//     timestamps:true
// })
// const itemSchema = new mongoose.Schema({
//     productId:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"product"
//     },
//     quantity: {
//         type: Number,
//         required: true,
//         min: [1, 'Quantity can not be less then 1.']
//     },
//     price: {
//         type: Number,
//         required: true
//     },
//     total: {
//         type: Number,
//         required: true,
//     }
// },{
//     timestamps:true
// })
// const cartSchema = new mongoose.Schema({
//     items:[itemSchema],
//     subTotal:{
//         default:0,
//         type:Number
//     }
// })

const Cart = new mongoose.model("carts",cartSchema)
module.exports=Cart;