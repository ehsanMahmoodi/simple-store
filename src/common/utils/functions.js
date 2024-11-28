const bcrypt = require("bcrypt");
const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, salt);
};
const verifyPassword = (password, hashedPass) => {
  return bcrypt.compareSync(password, hashedPass);
};
module.exports = { hashPassword, verifyPassword };
