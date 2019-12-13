module.exports = function(sequelize, Datatypes) {
  const user = sequelize.define(
    'user',
    {
      userId: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      loginId: {
        type: Datatypes.STRING,
        allowNull: false
      },
      password: {
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
  user.associate = function(db) {
    user.hasMany(db.review, { foreignKey: 'userId' });
  };
  return user;
};
