module.exports = function(sequelize, Datatypes) {
  const brand = sequelize.define(
    'brand',
    {
      brandId: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      brandName: {
        type: Datatypes.STRING,
        allowNull: false
      },
      brandURL: {
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
  brand.associate = function(db) {
    brand.hasMany(db.product, { foreignKey: 'brandId' });
  };
  return brand;
};
