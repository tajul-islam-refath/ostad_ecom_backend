const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    name: { type: String },
    password: { type: String },
    profile: { type: String },
  },
  { timestamps: true }
);

const User = model("User", userSchema);
module.exports = User;
