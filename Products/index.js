const express=require('express');


const connectDatabase = require('./db');

const { product_model } = require('./Models/prodModel');
const prodRouter = require('./Routes/route');


const app=express();

app.use(express.json());
app.use("/",prodRouter);
const port=9090;
app.get("/",async(req,res)=>{
    try{
     let result=await product_model.find().count();
    res.send({
        data:result,
        
    })
}
catch(err){
    console.log(err);
}
})
app.listen(port,()=>{
    connectDatabase();
    console.log('Server is running at port '+port);
})