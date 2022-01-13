'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Tags", [
      {title: "HTML", createdAt: new Date(), updatedAt: new Date()},
      {title: "CSS", createdAt: new Date(), updatedAt: new Date()},
      {title: "JavaScript", createdAt: new Date(), updatedAt: new Date()},
      {title: "React", createdAt: new Date(), updatedAt: new Date()},
      {title: "Redux", createdAt: new Date(), updatedAt: new Date()},
      {title: "Node.js", createdAt: new Date(), updatedAt: new Date()},
      {title: "TypeScript", createdAt: new Date(), updatedAt: new Date()},
      {title: "PostgreSQL", createdAt: new Date(), updatedAt: new Date()},
      {title: "Bootstrap", createdAt: new Date(), updatedAt: new Date()},

      {title: "Express", createdAt: new Date(), updatedAt: new Date()},
      {title: "PHP", createdAt: new Date(), updatedAt: new Date()},
      {title: "Ruby", createdAt: new Date(), updatedAt: new Date()},
      {title: "MongoDB", createdAt: new Date(), updatedAt: new Date()},
      {title: "Rust", createdAt: new Date(), updatedAt: new Date()},
      {title: "LESS", createdAt: new Date(), updatedAt: new Date()},
      {title: "SASS", createdAt: new Date(), updatedAt: new Date()},
      {title: "Git", createdAt: new Date(), updatedAt: new Date()},
      {title: "Figma", createdAt: new Date(), updatedAt: new Date()},

      {title: "SQL", createdAt: new Date(), updatedAt: new Date()},
      {title: "C++", createdAt: new Date(), updatedAt: new Date()},
      {title: "Java", createdAt: new Date(), updatedAt: new Date()},
      {title: "MVP", createdAt: new Date(), updatedAt: new Date()},
      {title: "VR", createdAt: new Date(), updatedAt: new Date()},
      {title: "Webpack", createdAt: new Date(), updatedAt: new Date()},
      {title: "Parcel", createdAt: new Date(), updatedAt: new Date()},
      {title: "Angular", createdAt: new Date(), updatedAt: new Date()},
      {title: "Next.js", createdAt: new Date(), updatedAt: new Date()},
      {title: "Nuxt.js", createdAt: new Date(), updatedAt: new Date()},

      {title: "C#", createdAt: new Date(), updatedAt: new Date()},
      {title: "Unity", createdAt: new Date(), updatedAt: new Date()},
      {title: "Ui", createdAt: new Date(), updatedAt: new Date()},
      {title: "Tilda", createdAt: new Date(), updatedAt: new Date()},
      {title: "Jest", createdAt: new Date(), updatedAt: new Date()},
      {title: "Kotlin", createdAt: new Date(), updatedAt: new Date()},
      {title: "Moxy", createdAt: new Date(), updatedAt: new Date()},
      {title: "REST API", createdAt: new Date(), updatedAt: new Date()},
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
