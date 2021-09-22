const { checkPassword } = require('../helpers/bcrypt');
const { signToken } = require('../helpers/jwt');
const { User  } = require('../models');
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

class UserController {
  static async googleAuth(req, res, next) {
    try {
      const ticket = await client.verifyIdToken({
        idToken: req.body.idToken,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();
      // console.log(payload);
      const email = payload.email;
      const username = payload.name;
      let newUsername = ``;
      for (let i = 0; i < username.length; i++) {
        if (username[i] !== " ") {
          newUsername += username[i].toLowerCase();
        }
      }
      const [user] = await User.findOrCreate({
        where: { email },
        defaults: {
          username: newUsername,
          email: payload.email,
          password: `${process.env.GOOGLE_PASSWORD}`,
        },
      });
      const access_token = signToken({
        id: user.id,
        username: user.username,
        email: user.email,
        profileUrl: user.profileUrl
      });
      res.status(201).json({
        access_token,
      });
    } catch (err) {
      next(err);
    }
  }
  static async register(req, res, next) {
    const { username, email, password } = req.body;
    try {
      const userData = await User.create({
        username,
        email,
        password,
      });
      res.status(201).json({
        id: userData.id,
        username: userData.username,
        email: userData.email,
        profileUrl: userData.profileUrl,
      });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    const { email, password } = req.body;
    try {
      const userData = await User.findOne({ where: { email } });
      if (!userData) {
        throw { name: "emailOrPasswordIsWrong" };
      } else {
        if (checkPassword(password, userData.password)) {
          const access_token = signToken({
            id: userData.id,
            username: userData.username,
            email: userData.email,
            profileUrl: userData.profileUrl,
          })
          res.status(200).json({ access_token });
        } else {
          throw { name: "emailOrPasswordIsWrong" };
        }
      }
    } catch (err) {
      next(err);
    }
  }

  static async getUserData(req, res, next) {
    try {
      const userData = {
        id: req.user.id,
        username: req.user.username,
        email: req.user.email,
        profileUrl: req.user.profileUrl,
      }
      res.status(200).json(userData);
    } catch (err) {
      next(err);
    }
  }

  static async changeProfile(req, res, next) {
    const { id } = req.user;
    const { profileUrl } = req.body;
    try {
      const userData = await User.findByPk(id);
      if (!userData) {
        throw { name: "invalidToken" };
      } else {
        const updatePost = await User.update(
          {
            profileUrl
          },
          { where: { id }, returning: true }
        );
        res.status(200).json({
          message: 'profileUrl has been updated',
          profileUrl: updatePost[1][0].profileUrl
        });
      }
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = UserController