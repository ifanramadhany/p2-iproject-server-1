'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Post, {through: 'Likes'})
      User.hasMany(models.Post, {foreignKey: 'UserId'})
      User.hasMany(models.Comment, {foreignKey: 'UserId'})
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'username already in use!'
      },
      validate: {
        notNull: { msg: 'username is required' },
        notEmpty: { msg: 'username is required' },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'email already in use!'
      },
      validate: {
        notNull: { msg: 'email is required' },
        notEmpty: { msg: 'email is required' },
        isEmail: {msg: 'email should be an email format'}
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'password is required' },
        notEmpty: { msg: 'password is required' },
        len: {
          args: [5, 50],
          msg: "The password length should be 5 characters minimum."
        }
      }
    },
    profileUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: 'profileUrl is required'},
        notNull: {msg: 'profileUrl is required'},
        isUrl: {msg: 'profileUrl should be url format'}
      }
    }
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        user.password = hashPassword(user.password);
        user.profileUrl = `https://avatars.dicebear.com/api/bottts/${user.username}.svg`
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};