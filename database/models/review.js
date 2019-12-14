module.exports = function(sequelize, Datatypes) {
  const review = sequelize.define(
    'review',
    {
      reviewId: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      userId: {
        type: Datatypes.INTEGER,
        allowNull: false
      },
      productId: {
        type: Datatypes.INTEGER,
        allowNull: false
      },
      score: {
        type: Datatypes.INTEGER,
        defaultValue: 5
      },
      reviewComment: {
        type: Datatypes.STRING
      }
    },
    {
      underscored: false,
      freezeTableName: true,
      paranoid: true
    }
  );
  review.associate = function(db) {
    review.belongsTo(db.product, { foreignKey: 'productId' });
    review.belongsTo(db.user, { foreignKey: 'userId' });
  };
  return review;
};
