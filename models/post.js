'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User, {foreignKey: 'UserId'})
    }
  };
  Post.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: 'title is required'},
        notEmpty: {msg: 'title is required'},
      }
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: 'artist is required'},
        notEmpty: {msg: 'artist is required'},
      }
    },
    embedUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: 'embedUrl is required'},
        notEmpty: {msg: 'embedUrl is required'},
        isUrl: {msg: 'embedUrl should be url format'}
      }
    },
    caption: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: 'caption is required'},
        notEmpty: {msg: 'caption is required'},
      }
    },
    like: {
      type: DataTypes.INTEGER,
      defaultValue: 0    
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {msg: 'UserId is required'}
      }
    }
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};