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
    await queryInterface.bulkInsert('Users', [
        {
          username: 'superuser',
          email: 'superuser@gmail.com',
          fullname: 'superuser',
          password: 'password',
          bio : 'superuser bio here',
          createdBy: 0,
          createdAt: new Date(),
          updatedBy: 0,
          updatedAt: new Date(),
          isDeleted: false
        },
        {
          username: 'admin',
          email: 'admin@gmail.com',
          fullname: 'admin',
          password: 'password',
          bio : 'admin bio here',
          createdBy: 0,
          createdAt: new Date(),
          updatedBy: 0,
          updatedAt: new Date(),
          isDeleted: false
        },
        {
          username: 'tester',
          email: 'tester@gmail.com',
          fullname: 'tester',
          password: 'password',
          bio : 'tester bio here',
          createdBy: 0,
          createdAt: new Date(),
          updatedBy: 0,
          updatedAt: new Date(),
          isDeleted: false
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
