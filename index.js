const express = require("express");
const cors = require("cors");
const conn = require("./database/db");
const cartRoute = require("./routes/cart.routes");

const app=express();
require("dotenv").config();
const { userRoute } = require("./routes/user.routes");
const { payment } = require("./routes/payment.routes");
const cookieParser = require("cookie-parser");

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//Using Routes
app.use("/user", userRoute);
app.use("/payment", payment);
app.use("/cart",cartRoute)

const port = process.env.PORT || 3050;

app.listen(port, () => {
  try {
    conn();
    console.log(`Server Started On Port:${port}`);
  } catch (error) {
    console.log("Internal Server Error");
  }
});
