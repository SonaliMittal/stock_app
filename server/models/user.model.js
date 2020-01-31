"use strict";

const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String
  }
});
const User = mongoose.model("users", userSchema);
module.exports = User;
