const express = require("express");
const cors= require("cors")
const conn = require("./database/db");
const { userroute } = require("./routes/user.routes");

const app=express();
app.use(express.json())
app.use(cors())
app.use("/user", userroute)
app.listen(4000,()=>{
    try {
        conn()
        console.log("Server Started")
    } catch (error) {
        console.log("Internal Server Error")
    }
})