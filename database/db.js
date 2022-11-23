const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({
   path:"./.env"
})

const API=process.env.MONGO_API;
function conn(){
   mongoose.connect(API)
   .then(()=>{
    console.log("Connected to Database")
   })
   .catch(()=>{
    console.log("Not Connected to Database")
   })

}

module.exports=conn;
