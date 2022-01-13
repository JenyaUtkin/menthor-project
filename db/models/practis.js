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
    static associate({Menthor, Enteresses,Tags}) {
      // define association here
      this.hasMany(Menthor,({foreignKey:'exp_id'}))
      this.belongsToMany(Tags,({through:'Enteresses', foreignKey:'tag_id'}))

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
