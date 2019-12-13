'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('saleInfo', [
      {
        saleInfoId: 1,
        productId: 1,
        marketId: 1,
        salePrice: '20000',
        saleURL:
          'https://www.maccosmetics.co.kr/product/13854/68838/makeup/matte-lip-mousse#/shade/%EB%B2%A1_%EC%95%A4_%EC%BD%9C'
      },
      {
        saleInfoId: 2,
        productId: 2,
        marketId: 2,
        salePrice: '19000',
        saleURL:
          'https://www.maccosmetics.co.kr/product/13854/68838/makeup/matte-lip-mousse#/shade/%EB%B2%A1_%EC%95%A4_%EC%BD%9C'
      },
      {
        saleInfoId: 3,
        productId: 3,
        marketId: 3,
        salePrice: '18000',
        saleURL:
          'https://www.maccosmetics.co.kr/product/13854/68838/makeup/matte-lip-mousse#/shade/%EB%B2%A1_%EC%95%A4_%EC%BD%9C'
      },
      {
        saleInfoId: 4,
        productId: 1,
        marketId: 4,
        salePrice: '22000',
        saleURL:
          'https://www.maccosmetics.co.kr/product/13854/68838/makeup/matte-lip-mousse#/shade/%EB%B2%A1_%EC%95%A4_%EC%BD%9C'
      },
      {
        saleInfoId: 5,
        productId: 2,
        marketId: 5,
        salePrice: '20100',
        saleURL:
          'https://www.maccosmetics.co.kr/product/13854/68838/makeup/matte-lip-mousse#/shade/%EB%B2%A1_%EC%95%A4_%EC%BD%9C'
      },
      {
        saleInfoId: 6,
        productId: 3,
        marketId: 6,
        salePrice: '23000',
        saleURL:
          'https://www.maccosmetics.co.kr/product/13854/68838/makeup/matte-lip-mousse#/shade/%EB%B2%A1_%EC%95%A4_%EC%BD%9C'
      },
      {
        saleInfoId: 7,
        productId: 1,
        marketId: 7,
        salePrice: '17500',
        saleURL:
          'https://www.maccosmetics.co.kr/product/13854/68838/makeup/matte-lip-mousse#/shade/%EB%B2%A1_%EC%95%A4_%EC%BD%9C'
      },
      {
        saleInfoId: 8,
        productId: 2,
        marketId: 1,
        salePrice: '27000',
        saleURL:
          'https://www.maccosmetics.co.kr/product/13854/68838/makeup/matte-lip-mousse#/shade/%EB%B2%A1_%EC%95%A4_%EC%BD%9C'
      },
      {
        saleInfoId: 9,
        productId: 3,
        marketId: 2,
        salePrice: '24000',
        saleURL:
          'https://www.maccosmetics.co.kr/product/13854/68838/makeup/matte-lip-mousse#/shade/%EB%B2%A1_%EC%95%A4_%EC%BD%9C'
      },
      {
        saleInfoId: 10,
        productId: 1,
        marketId: 3,
        salePrice: '23000',
        saleURL:
          'https://www.maccosmetics.co.kr/product/13854/68838/makeup/matte-lip-mousse#/shade/%EB%B2%A1_%EC%95%A4_%EC%BD%9C'
      },
      {
        saleInfoId: 11,
        productId: 2,
        marketId: 4,
        salePrice: '23500',
        saleURL:
          'https://www.maccosmetics.co.kr/product/13854/68838/makeup/matte-lip-mousse#/shade/%EB%B2%A1_%EC%95%A4_%EC%BD%9C'
      },
      {
        saleInfoId: 12,
        productId: 3,
        marketId: 5,
        salePrice: '16500',
        saleURL:
          'https://www.maccosmetics.co.kr/product/13854/68838/makeup/matte-lip-mousse#/shade/%EB%B2%A1_%EC%95%A4_%EC%BD%9C'
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
    return queryInterface.bulkDelete('saleInfo', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
