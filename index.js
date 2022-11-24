const express = require("express");
const cors = require("cors");
const conn = require("./database/db");
const { userRoute } = require("./routes/user.routes");
const { payment } = require("./routes/payment.routes");
const cookieParser = require("cookie-parser");
const productRouter = require("./routes/product.routes");
require("dotenv").config();

const app = express();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//Using Routes
app.use("/user", userRoute);
app.use("/payment", payment);
app.use("/products",productRouter)

const port = process.env.PORT || 3050;

app.listen(port, () => {
  try {
    conn();
    console.log(`Server Started On Port:${port}`);
  } catch (error) {
    console.log("Internal Server Error");
  }
});
