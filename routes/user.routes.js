const express = require("express");

//user controllers
const { signup, login, signout } = require("../controllers/user.controllers");
const {
  signupDetailsValidator,
  loginDetailsValidator,
} = require("../middleware/detailsValidator");

//userRoute initialize
const userRoute = express.Router();

//Routes
userRoute.post("/login", loginDetailsValidator, login);
userRoute.post("/signup", signupDetailsValidator, signup);

userRoute.get("/signout", signout);

//exports
module.exports = { userRoute };
