'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Practis", [
      {title: "0 - 1 ", createdAt: new Date(), updatedAt: new Date()},
      {title: "1 - 3", createdAt: new Date(), updatedAt: new Date()},
      {title: "3+", createdAt: new Date(), updatedAt: new Date()}
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
