const db = require('../../database/models');

const readAllReviewData = async () => {
  return db.review.findAll().catch(err => {
    console.error(err);
    throw err;
  });
};

module.exports = {
  readAllReviewData
};
