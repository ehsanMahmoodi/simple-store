const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    fullname: { type: String },
    email: { type: String },
    password: { type: String },
  },
  {
    timestamps: true,
  }
);
const UserModel = model("user", userSchema);
module.exports = { UserModel };
