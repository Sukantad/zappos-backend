const mongoose=require('mongoose')
const url="mongodb+srv://Abhishek:Abhishek1234@cluster0.lmieazm.mongodb.net/?retryWrites=true&w=majority";
const url2="mongodb://127.0.0.1:27017"

const connectDatabase = async () => {
    await mongoose.connect(url);
    console.log("Db connected")
}
module.exports=connectDatabase;