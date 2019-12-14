'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('market', [
      {
        marketId: 1,
        marketName: '1마켓',
        marketURL: 'https://www.maccosmetics.co.kr/'
      },
      {
        marketId: 2,
        marketName: '2마켓',
        marketURL: 'https://www.maccosmetics.co.kr/'
      },
      {
        marketId: 3,
        marketName: '3마켓',
        marketURL: 'https://www.maccosmetics.co.kr/'
      },
      {
        marketId: 4,
        marketName: '4마켓',
        marketURL: 'https://www.maccosmetics.co.kr/'
      },
      {
        marketId: 5,
        marketName: '5마켓',
        marketURL: 'https://www.maccosmetics.co.kr/'
      },
      {
        marketId: 6,
        marketName: '6마켓',
        marketURL: 'https://www.maccosmetics.co.kr/'
      },
      {
        marketId: 7,
        marketName: '7마켓',
        marketURL: 'https://www.maccosmetics.co.kr/'
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
    return queryInterface.bulkDelete('market', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
