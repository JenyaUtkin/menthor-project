'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menthor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Tags,Enteresses,Practis,Users}) {
      // define association here
      this.belongsToMany(Tags,({through:'Enteresses', foreignKey:'profils_id'}));
      this.belongsTo(Practis,({foreignKey:'exp_id'}))
      this.belongsTo(Users,({foreignKey:'user_id'}))

    }
  };
  Menthor.init({
    name: DataTypes.STRING,
    body: DataTypes.TEXT,
    img: DataTypes.STRING,
    link: DataTypes.STRING,
    price: DataTypes.STRING,
    exp_id: DataTypes.INTEGER,
    user_id:DataTypes.INTEGER
    
  }, {
    sequelize,
    modelName: 'Menthor',
  });
  return Menthor;
};
