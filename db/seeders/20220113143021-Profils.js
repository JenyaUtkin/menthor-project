'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Profils", [
      {name: "Женя Уткин", body: "Senoir по HTML", img: "https://i.pinimg.com/564x/2c/8c/76/2c8c7694242a9e74cbe3f1af392c866d.jpg", link: "https://www.instagram.com/instasamka", price: "2500", exp_id: "1", createdAt: new Date(), updatedAt: new Date()},
      {name: "Evgen", body: "Junior TypeScript", img: "https://i.pinimg.com/564x/2c/8c/76/2c8c7694242a9e74cbe3f1af392c866d.jpg", link: "однhttps://www.instagram.com/instasamkaокласники", price: "1500", exp_id: "2", createdAt: new Date(), updatedAt: new Date()},
      {name: "Уткин", body: "хочу войти в айти", img: "https://i.pinimg.com/564x/2c/8c/76/2c8c7694242a9e74cbe3f1af392c866d.jpg", link: "https://www.instagram.com/instasamka", price: "500", exp_id: "3", createdAt: new Date(), updatedAt: new Date()},
      {name: "Женя У.", body: "я вообще студент", img: "https://i.pinimg.com/564x/2c/8c/76/2c8c7694242a9e74cbe3f1af392c866d.jpg", link: "https://www.instagram.com/instasamka", price: "300", exp_id: "1", createdAt: new Date(), updatedAt: new Date()},

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
