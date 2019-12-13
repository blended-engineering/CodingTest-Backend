'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('detailColor', [
      {
        detailColorId: 1,
        groupColorId: 1,
        detailColorName: '빨간색 계열1',
        detailColorRGB: '#ff0000'
      },
      {
        detailColorId: 2,
        groupColorId: 1,
        detailColorName: '빨간색 계열2',
        detailColorRGB: '#ffd8d8'
      },
      {
        detailColorId: 3,
        groupColorId: 1,
        detailColorName: '빨간색 계열3',
        detailColorRGB: '#ffa7a7'
      },
      {
        detailColorId: 4,
        groupColorId: 1,
        detailColorName: '빨간색 계열4',
        detailColorRGB: '#f15f5f'
      },
      {
        detailColorId: 5,
        groupColorId: 1,
        detailColorName: '빨간색 계열5',
        detailColorRGB: '#cc3d3d'
      },
      {
        detailColorId: 6,
        groupColorId: 1,
        detailColorName: '빨간색 계열6',
        detailColorRGB: '#980000'
      },
      {
        detailColorId: 7,
        groupColorId: 1,
        detailColorName: '빨간색 계열7',
        detailColorRGB: '##670000'
      },
      {
        detailColorId: 8,
        groupColorId: 2,
        detailColorName: '주황색 계열1',
        detailColorRGB: '#ff5e00'
      },
      {
        detailColorId: 9,
        groupColorId: 2,
        detailColorName: '주황색 계열2',
        detailColorRGB: '#fae0d4'
      },
      {
        detailColorId: 10,
        groupColorId: 2,
        detailColorName: '주황색 계열3',
        detailColorRGB: '#ffc19e'
      },
      {
        detailColorId: 11,
        groupColorId: 2,
        detailColorName: '주황색 계열4',
        detailColorRGB: '#f29661'
      },
      {
        detailColorId: 12,
        groupColorId: 2,
        detailColorName: '주황색 계열5',
        detailColorRGB: '#cc723d'
      },
      {
        detailColorId: 13,
        groupColorId: 2,
        detailColorName: '주황색 계열6',
        detailColorRGB: '#993800'
      },
      {
        detailColorId: 14,
        groupColorId: 3,
        detailColorName: '주황색 계열7',
        detailColorRGB: '#662500'
      },
      {
        detailColorId: 15,
        groupColorId: 3,
        detailColorName: '주홍색 계열1',
        detailColorRGB: '#ff007f'
      },
      {
        detailColorId: 16,
        groupColorId: 3,
        detailColorName: '주홍색 계열2',
        detailColorRGB: '##ffd9ec'
      },
      {
        detailColorId: 17,
        groupColorId: 3,
        detailColorName: '주홍색 계열3',
        detailColorRGB: '##ffb2d9'
      },
      {
        detailColorId: 18,
        groupColorId: 3,
        detailColorName: '주홍색 계열4',
        detailColorRGB: '#f261aa'
      },
      {
        detailColorId: 19,
        groupColorId: 3,
        detailColorName: '주홍색 계열5',
        detailColorRGB: '#d9418d'
      },
      {
        detailColorId: 20,
        groupColorId: 3,
        detailColorName: '주홍색 계열6',
        detailColorRGB: '#99004c'
      },
      {
        detailColorId: 21,
        groupColorId: 3,
        detailColorName: '주홍색 계열7',
        detailColorRGB: '#660033'
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
    return queryInterface.bulkDelete('detailColor', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
