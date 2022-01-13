'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Enteresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tag_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'Tags',
          key:'id'
        }
      },
      profils_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'Menthor',
          key:'id'
        }
      },
      practical_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'Practis',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Enteresses');
  }
};
