'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('groupColor', [
      {
        groupColorId: 1,
        groupColorName: '빨간색 계열1',
        groupColorRGB: '#ff0000'
      },
      {
        groupColorId: 2,
        groupColorName: '주황색 계열1',
        groupColorRGB: '#ff5e00'
      },
      {
        groupColorId: 3,
        groupColorName: '주홍색 계열1',
        groupColorRGB: '#ff007f'
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
    return queryInterface.bulkDelete('groupColor', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
