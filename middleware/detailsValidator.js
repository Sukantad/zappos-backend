const { check } = require("express-validator");

// const varifyPassword = (req, res, next) => {
//   if (!req.body.confirmPassword) {
//     return res.status(400).send({
//       status: "error",
//       data: "Please enter confirm password",
//     });
//   } else if (req.body.password === req.body.confirmPassword) {
//     next();
//   } else {
//     return res.status(400).send({
//       status: "error",
//       data: "Confirm password must be same as password",
//     });
//   }
// };
//signup details validating
exports.signupDetailsValidator = [
  check("name", "Name atleast should be 3 characters").isLength({ min: 3 }),
  check("email", "Email should be valid").isEmail(),
  check("password", "Password at least should be 6 characters").isLength({
    min: 6,
  }),
  // varifyPassword,
];

//login details validating
exports.loginDetailsValidator = [
  check("email", "Email should be valid").isEmail(),
];
