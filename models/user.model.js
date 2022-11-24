const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  let hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;
  return next();
});

const usermodel = mongoose.model("users", UserSchema);

module.exports = usermodel;
