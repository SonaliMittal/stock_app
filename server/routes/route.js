const UserController=require( '../controllers/user.controller');
const express=require('express');
const services=require('../services/authentication.service')
module.exports = (()=> {
  let router = express.Router();
  router.post('/api/v1/users', UserController.registerUser);
  router.post('/api/v1/users/login', services.authentication,UserController.loginUser);
  router.get('/api/v1/products', UserController.getProducts);
  router.post('/api/v1/products/buy/users/:id', UserController.buyProducts);
  router.get('/api/v1/stocks/users/:id', UserController.getStocks);

  return router;
})();




