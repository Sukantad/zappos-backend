//Required Libraries and model
const usermodel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const expressJWT = require("express-jwt");

//Express Validator for SignUp
const { validationResult } = require("express-validator");

// dotenv config and jwt_secret key
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

//user signup controller
exports.signup = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      status: "error",
      data: errors.array()[0].msg,
    });
  }
  try {
    //checking if user already present in database
    const find = await usermodel.findOne({ email: req.body.email });
    if (find) {
      return res.status(400).send({
        status: "error",
        data: "User already exists",
      });
    }
    //create a new user in database
    const details = await usermodel.create(req.body);

    //deleting password for safety
    let resDetails = details.toJSON();
    delete resDetails.password;
    return res.send({
      status: "success",
      data: resDetails,
    });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      data: "Signup Failed! May you didn't provide all required data",
    });
  }
};

//user login controller
exports.login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({
        status: "error",
        data: errors.array()[0].msg,
      });
    }

    //checking user present in database or not
    const user = await usermodel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send({
        status: "error",
        data: "Email not found in database",
      });
    }

    //Authenticate User
    //matching encryted password with user password
    const password = bcrypt.compareSync(req.body.password, user.password);

    // if password don't match
    if (!password) {
      return res.status(400).send({
        status: "error",
        data: "Password is wrong, Please enter correct password.",
      });
    }

    //creating jwt signing token
    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
      JWT_SECRET
    );
    res.cookie("token", token, { expire: new Date() + 1 });
    const { _id, name, email } = user;
    return res.send({
      status: "success",
      data: token,
      user: {
        _id,
        name,
        email,
      },
    });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      data: "Internal Server Error",
    });
  }
};

exports.signout = (req, res) => {
  res.clearCookie("token");
  return res.send({
    status: "Success",
    data: "User Signout Successfull",
  });
};
