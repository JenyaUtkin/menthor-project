'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Roles,Menthor,Student}) {
      // define association here
      this.hasOne(Student,({foreignKey:'user_id'}))
      this.hasOne(Roles,({foreignKey:'role_id'}))
      this.hasOne(Menthor,({foreignKey:'user_id'}))
    }
  };
  Users.init({
    name: DataTypes.STRING,
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    role_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};