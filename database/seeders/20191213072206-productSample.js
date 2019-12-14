'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('product', [
      {
        productId: 1,
        productName: '파우더 키스 립스틱',
        category: '립스틱',
        brandId: 1,
        price: '27000',
        weight: '3g',
        groupColorId: 1,
        detailColorId: 1,
        view: 0,
        productImageURL:
          'https://blended.s3.ap-northeast-2.amazonaws.com/productImage/9fbed6fc-d38a-41fb-b052-ff6ed9bc1d7e.jpg'
      },
      {
        productId: 2,
        productName: '파우더 키스 립스틱',
        category: '립스틱',
        brandId: 1,
        price: '27000',
        weight: '3g',
        groupColorId: 1,
        detailColorId: 2,
        view: 0,
        productImageURL:
          'https://blended.s3.ap-northeast-2.amazonaws.com/productImage/9fbed6fc-d38a-41fb-b052-ff6ed9bc1d7e.jpg'
      },
      {
        productId: 3,
        productName: '파우더 키스 립스틱',
        category: '립스틱',
        brandId: 1,
        price: '27000',
        weight: '3g',
        groupColorId: 1,
        detailColorId: 3,
        view: 0,
        productImageURL:
          'https://blended.s3.ap-northeast-2.amazonaws.com/productImage/9fbed6fc-d38a-41fb-b052-ff6ed9bc1d7e.jpg'
      },
      {
        productId: 4,
        productName: '파우더 키스 립스틱',
        category: '립스틱',
        brandId: 1,
        price: '27000',
        weight: '3g',
        groupColorId: 1,
        detailColorId: 4,
        view: 0,
        productImageURL:
          'https://blended.s3.ap-northeast-2.amazonaws.com/productImage/9fbed6fc-d38a-41fb-b052-ff6ed9bc1d7e.jpg'
      },
      {
        productId: 5,
        productName: '파우더 키스 립스틱',
        category: '립스틱',
        brandId: 1,
        price: '27000',
        weight: '3g',
        groupColorId: 1,
        detailColorId: 5,
        view: 0,
        productImageURL:
          'https://blended.s3.ap-northeast-2.amazonaws.com/productImage/9fbed6fc-d38a-41fb-b052-ff6ed9bc1d7e.jpg'
      },
      {
        productId: 6,
        productName: '파우더 키스 립스틱',
        category: '립스틱',
        brandId: 1,
        price: '27000',
        weight: '3g',
        groupColorId: 1,
        detailColorId: 6,
        view: 0,
        productImageURL:
          'https://blended.s3.ap-northeast-2.amazonaws.com/productImage/9fbed6fc-d38a-41fb-b052-ff6ed9bc1d7e.jpg'
      },
      {
        productId: 7,
        productName: '파우더 키스 립스틱',
        category: '립스틱',
        brandId: 1,
        price: '27000',
        weight: '3g',
        groupColorId: 1,
        detailColorId: 7,
        view: 0,
        productImageURL:
          'https://blended.s3.ap-northeast-2.amazonaws.com/productImage/9fbed6fc-d38a-41fb-b052-ff6ed9bc1d7e.jpg'
      },
      {
        productId: 8,
        productName: '입생로랑 립스틱',
        category: '립스틱',
        brandId: 2,
        price: '32000',
        weight: '5g',
        groupColorId: 1,
        detailColorId: 2,
        view: 0,
        productImageURL:
          'https://blended.s3.ap-northeast-2.amazonaws.com/productImage/9fbed6fc-d38a-41fb-b052-ff6ed9bc1d7e.jpg'
      },
      {
        productId: 9,
        productName: '슈에무라 립스틱',
        category: '립스틱',
        brandId: 3,
        price: '23000',
        weight: '4g',
        groupColorId: 1,
        detailColorId: 3,
        view: 0,
        productImageURL:
          'https://blended.s3.ap-northeast-2.amazonaws.com/productImage/9fbed6fc-d38a-41fb-b052-ff6ed9bc1d7e.jpg'
      },
      {
        productId: 10,
        productName: '샤넬 립스틱',
        category: '립스틱',
        brandId: 4,
        price: '29000',
        weight: '3g',
        groupColorId: 1,
        detailColorId: 1,
        view: 0,
        productImageURL:
          'https://blended.s3.ap-northeast-2.amazonaws.com/productImage/9fbed6fc-d38a-41fb-b052-ff6ed9bc1d7e.jpg'
      },
      {
        productId: 11,
        productName: '샤넬 립스틱2',
        category: '립스틱',
        brandId: 4,
        price: '30000',
        weight: '3.5g',
        groupColorId: 3,
        detailColorId: 15,
        view: 0,
        productImageURL:
          'https://blended.s3.ap-northeast-2.amazonaws.com/productImage/9fbed6fc-d38a-41fb-b052-ff6ed9bc1d7e.jpg'
      },
      {
        productId: 12,
        productName: '샤넬 립스틱3',
        category: '립스틱',
        brandId: 4,
        price: '35000',
        weight: '4g',
        groupColorId: 2,
        detailColorId: 8,
        view: 0,
        productImageURL:
          'https://blended.s3.ap-northeast-2.amazonaws.com/productImage/9fbed6fc-d38a-41fb-b052-ff6ed9bc1d7e.jpg'
      }
    ]);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        productName: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('product', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
