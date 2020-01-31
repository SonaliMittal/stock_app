"use strict";

const mongoose = require("mongoose");
const sSchema = new mongoose.Schema({
  productId: {
    type: String
  },
  stock: {
    type: Number
  },
  userId: {
    type: String
  }
});
const Stock = mongoose.model("stocks", sSchema);
module.exports = Stock;
