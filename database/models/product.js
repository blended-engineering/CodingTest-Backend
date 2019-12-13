module.exports = function(sequelize, Datatypes) {
  const product = sequelize.define(
    'product',
    {
      productId: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      productName: {
        type: Datatypes.STRING,
        allowNull: false
      },
      category: {
        type: Datatypes.STRING,
        allowNull: false
      },
      brandId: {
        type: Datatypes.INTEGER,
        allowNull: false
      },
      price: {
        type: Datatypes.STRING
      },
      weight: {
        type: Datatypes.STRING
      },
      groupColorId: {
        type: Datatypes.INTEGER
      },
      detailColorId: {
        type: Datatypes.INTEGER
      },
      view: {
        type: Datatypes.INTEGER,
        defaultValue: 0
      },
      productImageURL: {
        type: Datatypes.STRING
      }
    },
    {
      underscored: false,
      freezeTableName: true,
      paranoid: true
    }
  );
  product.associate = function(db) {
    product.belongsTo(db.brand, { foreignKey: 'brandId' });
    product.belongsTo(db.groupColor, {
      foreignKey: 'groupColorId'
    });
    product.belongsTo(db.detailColor, { foreignKey: 'detailColorId' });
    product.hasMany(db.review, { foreignKey: 'productId' });
    product.hasMany(db.saleInfo, { foreignKey: 'productId' });
  };
  return product;
};
