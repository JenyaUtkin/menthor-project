'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Practis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Profils}) {
      // define association here
      this.hasMany(Profils,({foreignKey:'exp_id'}))
    }
  };
  Practis.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Practis',
  });
  return Practis;
};