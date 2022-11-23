const mongoose = require("mongoose");

function conn(){
   mongoose.connect("mongodb://localhost:27017/zappos")
   .then(()=>{
    console.log("Connected to Database")
   })
   .catch(()=>{
    console.log("Not Connected to Database")
   })

}

module.exports=conn;
