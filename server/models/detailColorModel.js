const db = require('../../database/models');

const readAllDetailColorData = async () => {
  return db.detailColor.findAll().catch(err => {
    console.error(err);
    throw err;
  });
};

module.exports = {
  readAllDetailColorData
};
