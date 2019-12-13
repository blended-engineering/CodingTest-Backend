const db = require('../../database/models');

const readAllMarketData = async () => {
  return db.market.findAll().catch(err => {
    console.error(err);
    throw err;
  });
};

module.exports = {
  readAllMarketData
};
