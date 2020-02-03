'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Context,{
      foriegnKey:'UserId',
      onDelete:'CASCADE'
    })
  };
  return User;
};