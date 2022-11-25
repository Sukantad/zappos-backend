const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({
   path:"./.env"
})

const MONGO_ENDPOINT=process.env.MONGO_API;

function conn(){
   mongoose.connect(MONGO_ENDPOINT)
   .then(()=>{
    console.log("Connected to Database")
   })
   .catch(()=>{
    console.log("Not Connected to Database")
   })

}

module.exports = conn;
