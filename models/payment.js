const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    country:{
        type:String,
        enum: ["united states", "palau","virgin islands","puerto rico","northern mariana"],
        require:true,
    },
    name:{
        type:String,
        required:true
    },
    detailadd:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        require:true,
        unique:true
    }
  
});

// we need to create a collection 

const Payments = new mongoose.model("Payments", paymentSchema);

module.exports = Payments;