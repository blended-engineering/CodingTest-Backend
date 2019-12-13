const db = require('../../database/models');

const readProductInfoByProductId = async productId => {
  return await db.product.findOne({ where: { productId } });
};

module.exports = {
  readProductInfoByProductId
};
