'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Menthors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      body: {
        type: Sequelize.TEXT
      },
      img: {
        type: Sequelize.STRING
      },
      link: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      exp_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'Practis',
          key:'id'
        }
      },
      user_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'Users',
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
    await queryInterface.dropTable('Menthors');
  }
};
