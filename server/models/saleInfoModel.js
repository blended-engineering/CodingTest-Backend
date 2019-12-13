const db = require('../../database/models');

const readAllSaleInfoData = async () => {
  return db.saleInfo.findAll().catch(err => {
    console.error(err);
    throw err;
  });
};

module.exports = {
  readAllSaleInfoData
};
