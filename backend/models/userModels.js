const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
      required: true,
    },

    password: String,
    profilePic: String,
    role: String,
  },
  { timestamps: true }
);
const userModels = mongoose.model("user", userSchema);

module.exports = userModels;