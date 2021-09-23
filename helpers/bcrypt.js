const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(8);

const hashPassword = (password) => {
  return bcrypt.hashSync(password, salt);
}

const checkPassword = (passwordFromUser, passwordInDataBase) => {
  return bcrypt.compareSync(passwordFromUser, passwordInDataBase);
}

module.exports = {
  hashPassword,
  checkPassword
}
