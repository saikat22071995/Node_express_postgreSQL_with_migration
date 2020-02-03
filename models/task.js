//@ Task Model


'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    task_name: DataTypes.STRING,
    task_date: DataTypes.DATE
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
    Task.belongsTo(models.Context,{
      foreignKey:'ContextId',
      onDelete:'CASCADE'
    })
  };
  return Task;
};