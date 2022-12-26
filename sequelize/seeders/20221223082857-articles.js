'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Articles', [
        {
          title: 'Bengawan Solo',
          decription: 'description article bengawan',
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Kisah Tangkupan Perahu',
          decription: 'description article kisah tangkupan perahu',
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
