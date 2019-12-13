const db = require('../../database/models');

const readAllBrandData = async () => {
  return db.brand.findAll().catch(err => {
    console.error(err);
    throw err;
  });
};

module.exports = {
  readAllBrandData
};
