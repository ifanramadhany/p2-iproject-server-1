const { verifyToken } = require("../helpers/jwt");
const { Post, User } = require("../models");

const authentication = async (req, res, next) => {
  const accessToken = req.headers.access_token;
  try {
    const payload = verifyToken(accessToken);
    // console.log(payload);
    const userData = await User.findOne({ where: { email: payload.email } });
    if (!userData) {
      throw { name: "invalidToken" };
    } else {
      req.user = {
        id: userData.id,
        username: userData.username,
        email: userData.email,
        profileUrl: userData.profileUrl,
      };
      next();
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const authorization = async (req, res, next) => {
  const foodId = req.params.id;
  console.log(foodId);
  try {
    if (req.user.role === "admin") {
      next();
    } else {
      const foodData = await Food.findByPk(foodId);
      console.log(foodData);
      if (!foodData) {
        throw { name: "foodNotFound" };
      }
      const authorId = foodData.authorId;

      if (authorId !== +req.user.id) {
        throw { name: "forbidden" };
      }
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  authentication,
  authorization,
};