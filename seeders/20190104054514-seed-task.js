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
    return queryInterface.bulkInsert('Tasks', [{
      status: 'active',
      title: 'example task 1',
      description: 'this is an example task',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }, {
      status: 'active',
      title: 'example subtask 1',
      description: 'the first subtask',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }, {
      status: 'active',
      title: 'example subtask 2',
      description: 'another subtask, dependent on subtask 1',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }, {
      status: 'active',
      title: 'exmple subtask 1,1',
      description: 'a tinier, simpler subtask, supporting subtask 1',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }, {
      status: 'active',
      title: 'example subtask 1,2',
      description: 'this is a suitable replacement for subtask 1,1',
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
    return queryInterface.bulkDelete('Tasks', null, {});

  }
};
