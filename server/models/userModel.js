const db = require('../../database/models');

const readAllUserData = async () => {
  return db.user.findAll().catch(err => {
    console.error(err);
    throw err;
  });
};

module.exports = {
  readAllUserData
};
