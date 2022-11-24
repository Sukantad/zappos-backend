const mongoose = require("mongoose");
const dotenv = require("dotenv");
//env config
dotenv.config();

//DB Connection
const API = process.env.MONGO_API;
function conn() {
  mongoose
    .connect(API)
    .then(() => {
      console.log("Connected to Database");
    })
    .catch((error) => {
      console.log("Failed To Connect With Database, Error: ", error);
    });
}

module.exports = conn;
