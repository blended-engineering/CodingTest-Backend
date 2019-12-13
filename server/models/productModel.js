const db = require('../../database/models');

const readProductInfoByProductId = async productId => {
  return await db.product
    .findOne({
      where: { productId },
      attributes: [
        'productId',
        'name',
        'category',
        'price',
        'weight',
        'view',
        'productImageURL',
        'createdAt',
        'updatedAt'
      ],
      include: [
        { model: db.brand, attributes: ['brandName', 'brandURL'] },
        {
          model: db.groupColor,
          attributes: ['groupColorName', 'groupColorRGB']
        },
        {
          model: db.detailColor,
          attributes: ['detailColorName', 'detailColorRGB']
        },
        {
          model: db.saleInfo,
          attributes: ['salePrice', 'saleURL', 'createdAt', 'updatedAt'],
          include: [
            { model: db.market, attributes: ['marketName', 'marketURL'] }
          ]
        },
        {
          model: db.review,
          attributes: ['score', 'reviewComment', 'createdAt'],
          include: [{ model: db.user, attributes: ['userId', 'loginId'] }]
        }
      ]
    })
    .catch(e => {
      console.error(e);
      throw e;
    });
};

module.exports = {
  readProductInfoByProductId
};
