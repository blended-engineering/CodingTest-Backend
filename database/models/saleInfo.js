module.exports = function(sequelize, Datatypes) {
  const saleInfo = sequelize.define(
    'saleInfo',
    {
      saleInfoId: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      productId: {
        type: Datatypes.INTEGER,
        allowNull: false
      },
      marketId: {
        type: Datatypes.INTEGER,
        allowNull: false
      },
      salePrice: {
        type: Datatypes.STRING,
        allowNull: false
      },
      saleURL: {
        type: Datatypes.STRING,
        allowNull: false
      }
    },
    {
      underscored: false,
      freezeTableName: true,
      paranoid: true
    }
  );
  saleInfo.associate = function(db) {
    saleInfo.belongsTo(db.product, { foreignKey: 'productId' });
    saleInfo.belongsTo(db.market, { foreignKey: 'marketId' });
  };
  return saleInfo;
};
