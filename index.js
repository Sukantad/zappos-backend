const express = require("express");
const cors = require("cors");
const conn = require("./database/db");
const { userRoute } = require("./routes/user.routes");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const app = express();

//middlewares

app.use(express.json());
app.use(cookieParser());
app.use(cors());

//Using Routes

app.use("/user", userRoute);

const port = process.env.PORT || 3050;

app.listen(port, () => {
  try {
    conn();
    console.log(`Server Started On Port:${port}`);
  } catch (error) {
    console.log("Internal Server Error");
  }
});
