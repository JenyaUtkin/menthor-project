'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Enteresses", [
      {tag_id: 1, profils_id: 1, createdAt: new Date(), updatedAt: new Date()},
      {tag_id: 15, profils_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {tag_id: 4, profils_id: 2, createdAt: new Date(), updatedAt: new Date()}
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
