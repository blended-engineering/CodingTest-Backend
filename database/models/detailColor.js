module.exports = function(sequelize, Datatypes) {
  const detailColor = sequelize.define(
    'detailColor',
    {
      detailColorId: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      groupColorId: {
        type: Datatypes.INTEGER,
        allowNull: false
      },
      detailColorName: {
        type: Datatypes.STRING,
        allowNull: false
      },
      detailColorRGB: {
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
  detailColor.associate = function(db) {
    detailColor.hasMany(db.product, { foreignKey: 'detailColorId' });
    detailColor.belongsTo(db.groupColor, { foreignKey: 'groupColorId' });
  };
  return detailColor;
};
