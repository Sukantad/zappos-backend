const express = require("express");
const passport = require("passport");
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
userRoute.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

userRoute.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

//exports
module.exports = { userRoute };
