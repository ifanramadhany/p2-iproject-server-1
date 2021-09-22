const { Post, User, Like } = require('../models');

class PostController {
  static async addPost(req, res, next) {
    const UserId = req.user.id
    const { title, artist, embedUrl, caption } = req.body;
    try {
      const postData = await Post.create({
        title,
        artist,
        embedUrl,
        caption,
        UserId
      });
      res.status(201).json(postData);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async getAll(req, res, next) {
    try {
      const postData = await Post.findAll({
        include: [
          {
            model: User,
            attributes: {
              exclude: ["password"],
            },
          },
        ],
        order: [["updatedAt" || "createdAt", "DESC"]],
      });
      res.status(200).json(postData);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  
}

module.exports = PostController