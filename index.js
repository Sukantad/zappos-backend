const express = require("express");
const cors= require("cors")
const conn = require("./database/db");
const cartRoute = require("./routes/cart.routes");

const app=express();
app.use(express.json())
app.use(cors())
app.use("/cart",cartRoute)

app.listen(4000,()=>{
    try {
        conn()
    } catch (error) {
        console.log("Internal Server Error")
    }
})