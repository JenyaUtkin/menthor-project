'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profils extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Tags,Enteresses,Practis}) {
      // define association here
      this.belongsToMany(Tags,({through:'Enteresses', foreignKey:'profils_id'}));
      this.belongsTo(Practis,({foreignKey:'exp_id'}))

    }
  };
  Profils.init({
    name: DataTypes.STRING,
    body: DataTypes.TEXT,
    img: DataTypes.STRING,
    link: DataTypes.STRING,
    price: DataTypes.STRING,
    exp_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Profils',
  });
  return Profils;
};