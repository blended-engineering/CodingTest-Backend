module.exports = function(sequelize, Datatypes) {
  const market = sequelize.define(
    'market',
    {
      marketId: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      marketName: {
        type: Datatypes.STRING,
        allowNull: false
      },
      marketURL: {
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
  market.associate = function(db) {
    market.hasMany(db.saleInfo, { foreignKey: 'marketId' });
  };
  return market;
};
