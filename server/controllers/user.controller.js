const mongoClient = require("../mongoClient/mongo.client");
const userHelpers = require("../helpers/user.helper");

const registerUser = async (req, res) => {
  try {
    const hash = await userHelpers.createHashPassword(req.body.password);

    console.log("hhahahha", hash);
    req.body.password = hash;
    await mongoClient.createUser(req.body);

    return res.status(200).json({
      code: 200,
      message: "Created Successfully."
    });
  } catch (err) {}
};

const loginUser = async (req, res) => {
  try {
    return res.status(200).json({
      status: "success",
      user_info: req.user_info
    });
  } catch (error) {
    return res.end(error);
  }
};

const getProducts = async (req, res) => {
  try {
    let products = await mongoClient.products(req.body);
    return res.status(200).json(products);
  } catch (err) {}
};


const buyProducts = async (req, res) => {
  try {
    console.log("req.body,req.params.id",req.body,req.params.id);
    for(let i=0;i<req.body.length;i++){
      await mongoClient.buy(req.body[i],req.params.id);
    }
    return res.status(200).json(products);
  } catch (err) {}
};


const getStocks=async (req,res)=>{
  try {

    let stocks=await mongoClient.getStk(req.params.id);
    return res.status(200).json(stocks);
  } catch (err) {}
}
module.exports = {
  registerUser,
  loginUser,
  getProducts,
  buyProducts,
  getStocks
};
