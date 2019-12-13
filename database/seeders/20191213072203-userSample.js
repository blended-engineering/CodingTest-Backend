'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user', [
      {
        userId: 1,
        loginId: 'blended_test_1',
        password: '1234'
      },
      {
        userId: 2,
        loginId: 'blended_test_2',
        password: '1234'
      },
      {
        userId: 3,
        loginId: 'blended_test_3',
        password: '1234'
      },
      {
        userId: 4,
        loginId: 'blended_test_4',
        password: '1234'
      },
      {
        userId: 5,
        loginId: 'blended_test_5',
        password: '1234'
      },
      {
        userId: 6,
        loginId: 'blended_test_6',
        password: '1234'
      },
      {
        userId: 7,
        loginId: 'blended_test_1',
        password: '1234'
      }
    ]);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
