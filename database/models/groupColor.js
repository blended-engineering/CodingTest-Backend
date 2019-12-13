module.exports = function(sequelize, Datatypes) {
  const groupColor = sequelize.define(
    'groupColor',
    {
      groupColorId: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      groupColorName: {
        type: Datatypes.STRING,
        allowNull: false
      },
      groupColorRGB: {
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
  groupColor.associate = function(db) {
    groupColor.hasMany(db.product, { foreignKey: 'groupColorId' });
    groupColor.hasMany(db.detailColor, { foreignKey: 'detailColorId' });
  };
  return groupColor;
};
