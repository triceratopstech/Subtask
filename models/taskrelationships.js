'use strict';
module.exports = (sequelize, DataTypes) => {
  const TaskRelationships = sequelize.define('TaskRelationships', {
    subjectTask: DataTypes.BIGINT,
    objectTask: DataTypes.BIGINT,
    relationshipType: DataTypes.STRING
  }, {});
  TaskRelationships.associate = function(models) {
    // associations can be defined here
  };
  return TaskRelationships;
};