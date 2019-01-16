'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('TaskRelationships', [{
      subjectTask: '1',
      objectTask: '3',
      relationshipType: 'owns',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }, {
      subjectTask: '1',
      objectTask: '2',
      relationshipType: 'owns',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }, {
      subjectTask: '3',
      objectTask: '2',
      relationshipType: 'requires',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }, {
      subjectTask: '2',
      objectTask: '4',
      relationshipType: 'owns',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }, {
      subjectTask: '2',
      objectTask: '5',
      relationshipType: 'owns',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()

    }, {
      subjectTask: '4',
      objectTask: '5',
      relationshipType: 'substitutes',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('TaskRelationships', null, {});

  }
};
