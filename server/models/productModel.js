const db = require('../../database/models');

const readProductInfoByProductId = async productId => {
  return await db.product
    .findOne({
      where: { productId },
      attributes: [
        'productId',
        'productName',
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

const readAllProductsInfoByName = async productName => {
  return db.product
    .findAll({
      where: { productName },
      attributes: ['productId', 'productName'],
      include: [
        {
          model: db.detailColor,
          attributes: ['detailColorName', 'detailColorRGB']
        }
      ]
    })
    .catch(e => {
      console.error(e);
      throw e;
    });
};

const readAllProductData = async () => {
  return db.product.findAll().catch(err => {
    console.error(err);
    throw err;
  });
};

module.exports = {
  readProductInfoByProductId,
  readAllProductsInfoByName,
  readAllProductData
};
