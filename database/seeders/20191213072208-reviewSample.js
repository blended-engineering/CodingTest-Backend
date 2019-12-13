'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('review', [
      {
        reviewId: 1,
        userId: 1,
        productId: 1,
        score: 5,
        reviewComment: '너무 마음에 들어요 강추'
      },
      {
        reviewId: 2,
        userId: 1,
        productId: 2,
        score: 4,
        reviewComment: '조금 아쉽지만 나쁘지 않아요'
      },
      {
        reviewId: 3,
        userId: 1,
        productId: 3,
        score: 4,
        reviewComment: '발색 마음에 듭니다'
      },
      {
        reviewId: 4,
        userId: 2,
        productId: 1,
        score: 3,
        reviewComment: '생각보다 별로..'
      },
      {
        reviewId: 5,
        userId: 2,
        productId: 2,
        score: 5,
        reviewComment: '매우 만족! 다음에도 구매 의사 있어요!'
      },
      {
        reviewId: 6,
        userId: 2,
        productId: 3,
        score: 2,
        reviewComment: '실망이다.. 다시는 안 살듯'
      },
      {
        reviewId: 7,
        userId: 3,
        productId: 1,
        score: 1,
        reviewComment: '깨졌는데 환불 안해주다니.. 실망입니다'
      },
      {
        reviewId: 8,
        userId: 3,
        productId: 2,
        score: 5,
        reviewComment: '너무 만족해요!!!'
      },
      {
        reviewId: 9,
        userId: 3,
        productId: 3,
        score: 2,
        reviewComment: 'Aweful...'
      },
      {
        reviewId: 10,
        userId: 4,
        productId: 1,
        score: 5,
        reviewComment: 'Great!!!'
      },
      {
        reviewId: 11,
        userId: 4,
        productId: 2,
        score: 4,
        reviewComment: 'Not bad!'
      },
      {
        reviewId: 12,
        userId: 4,
        productId: 3,
        score: 5,
        reviewComment: '매우 만족합니다 !!!!!'
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
    return queryInterface.bulkDelete('review', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
