'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('brand', [
      {
        brandId: 1,
        brandName: '맥',
        brandURL: 'https://www.maccosmetics.co.kr'
      },
      {
        brandId: 2,
        brandName: '입생로랑',
        brandURL: 'https://www.yslbeautykr.com/ko_KR/home'
      },
      {
        brandId: 3,
        brandName: '슈에무라',
        brandURL: 'https://www.shuuemura.co.kr'
      },
      {
        brandId: 4,
        brandName: '샤넬',
        brandURL: 'https://www.chanel.com/ko_KR/fragrance-beauty/home.html'
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
    return queryInterface.bulkDelete('brand', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
