const express = require("express");
const cors = require("cors");
const conn = require("./database/db");
const passport = require("passport");
const { userRoute } = require("./routes/user.routes");
const { payment } = require("./routes/payment.routes");
const cookieParser = require("cookie-parser");
const productRouter = require("./routes/product.routes");
const cartRoute = require("./routes/cart.routes");
require("dotenv").config();
require("./config/passport")(passport);

const app = express();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//Using Routes
app.use("/user", userRoute);
app.use("/payment", payment);
app.use("/products", productRouter);
app.use("/cart", cartRoute);

const port = process.env.PORT || 3050;

app.listen(port, () => {
  try {
    conn();
    console.log(`Server Started On Port:${port}`);
  } catch (error) {
    console.log("Internal Server Error");
  }
});
