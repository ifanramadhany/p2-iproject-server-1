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
  const postId = req.params.id;
  try {
    const postData = await Post.findByPk(postId);
    if (!postData) {
      throw { name: "postNotFound" };
    }
    const UserId = postData.UserId;

    if (UserId !== +req.user.id) {
      throw { name: "forbidden" };
    }
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  authentication,
  authorization,
};
