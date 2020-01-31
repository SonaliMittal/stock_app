

const userHelper=require('../helpers/user.helper');
const MESSAGES=require('../messages');
const mongoClient=require('../mongoClient/mongo.client')


const authentication = async (req, res, next) => {
    try {
      let user = await validateUser(req, res);
      let token = await userHelper.createToken(user);
  
      let userInfo={};
      userInfo.id=user.id;
      userInfo.email=user.email;
      userInfo.name=user.firstName+' '+ user.lastName;
      userInfo.token=token;
      user['token']=token;
      req.user_info = userInfo;
      next();
    } catch (err) {
      return res.status(500).json({
        status: "error",
        message: MESSAGES.iNTERNAL_SERVER_ERR,
        error: err
      });
    }
  };
  
  const validateUser = async (req, res) => {
    let criteria = {};
    criteria.email = req.body.email;
    try {
      let user = await mongoClient.findUserByCriteria(criteria);
  
      if (!user || !(await userHelper.comparePassword(req.body.password, user))) {
        return res.status(401).json({
          status: "error",
          message: MESSAGES.AUTHENTICATION_ERR
        });
      }
      return user;
    } catch (err) {
      return res.status(500).json({
        status: "error",
        message: MESSAGES.iNTERNAL_SERVER_ERR,
        error: err
      });
    }
  };

  module.exports={
    validateUser,  authentication
  }