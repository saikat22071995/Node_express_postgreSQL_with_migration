'use strict';
module.exports = (sequelize, DataTypes) => {
  const Context = sequelize.define('Context', {
    context_name: DataTypes.STRING,
    context_date: DataTypes.DATE
  }, {});
  Context.associate = function(models) {
    // associations can be defined here
    Context.hasMany(models.Task,{
      foriegnKey:'ContextId',
      onDelete:'CASCADE'
    })
    Context.belongsTo(models.User,{
      foriegnKey:'UserId',
      onDelete:'CASCADE'
    })
  };
  return Context;
};