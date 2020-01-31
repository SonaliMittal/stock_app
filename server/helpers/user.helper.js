const bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");

const createHashPassword = async password => {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(password, salt);
  console.log("hash",hash)
  return hash;
};

const createToken = async user => {
  var token = jwt.sign(
    { id: user.id },
    'the_secret_key'
  );
  return token;
};

const comparePassword = async (password, user) => {
  return await bcrypt.compare(password, user.password);
};

module.exports = {
  comparePassword,
  createToken,
  createHashPassword
};
