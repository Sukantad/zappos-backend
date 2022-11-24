const express = require("express");
const cors= require("cors")
const conn = require("./database/db");
const { userroute } = require("./routes/user.routes");
const { payment } = require("./routes/payment.routes");

const app=express();
app.use(express.json())
app.use(cors())
app.use("/user", userroute)

app.use("/payments", payment)

app.listen(4000,()=>{
    try {
        conn()
        console.log("Server Started")
    } catch (error) {
        console.log("Internal Server Error")
    }
})