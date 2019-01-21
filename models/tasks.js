'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tasks = sequelize.define('Tasks', {
    id: DataTypes.String,
    status: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Tasks.associate = function(models) {
    // associations can be defined here
  };
  return Tasks;
};