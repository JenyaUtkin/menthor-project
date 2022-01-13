'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert("Roles", [
      {name: "Student", createdAt: new Date(), updatedAt: new Date()},
      {name: "Mentor", createdAt: new Date(), updatedAt: new Date()},
      {name: "Admin", createdAt: new Date(), updatedAt: new Date()}
    ])
/**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
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
