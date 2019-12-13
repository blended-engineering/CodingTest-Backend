const db = require('../../database/models');

const readAllGroupColorData = async () => {
  return db.groupColor.findAll().catch(err => {
    console.error(err);
    throw err;
  });
};

module.exports = {
  readAllGroupColorData
};
