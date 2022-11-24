const { check } = require("express-validator");

//signup details validating
exports.signupDetailsValidator = [
  check("name", "Name atleast should be 3 characters").isLength({ min: 3 }),
  check("email", "Email should be valid").isEmail(),
  check("password", "Password at least should be 6 characters").isLength({
    min: 6,
  }),
];

//login details validating
exports.loginDetailsValidator = [
  check("email", "Email should be valid").isEmail(),
];
