"use strict";

const mongoose = require("mongoose");
const pSchema = new mongoose.Schema({
  productName: {
    type: String
  },
  price: {
    type: Number
  },
  serialNo: {
    type: String
  },
  stock: {
    type: Number
  },
  link: {
    type: String
  }
});
const Product = mongoose.model("products", pSchema);
module.exports = Product;
