const User = require("../models/user.model");
const Product = require("../models/product.model");
const Stock = require("../models/stock.model");

const createUser = async doc => {
  return await User.create(doc);
};

const findUserByCriteria = async (criteria, options = {}) => {
  return await User.findOne(criteria, options);
};

const products = async () => {
  return await Product.find({});
};

const buy = async (data, userId) => {
  console.log("data", data);
  let stock = await Stock.create({
    productId: data._id,
    stocks: data.totalItems,
    userId: userId,
    stock: data.stock
  });

  let prod = await Product.findOne({
    id: data._id
  });

  console.log("prod", prod);
  let currentStock = prod.stock - data.totalItems;
  return await updateOne(
    {
      id: data._id
    },
    {
      $set: {
        stock: currentStock
      }
    }
  );
};

const getStk = async userId => {
  let stocks = await Stock.find({
    userId: userId
  });

  let productIds = stocks.map(s => {
    return s.productId;
  });

  let stkP = await Product.find({ _id: { $in: productIds } });

  return stkP;
};

module.exports = {
  createUser,
  findUserByCriteria,
  products,
  buy,
  getStk
};
