'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('Choices', [
// Question 1
    {
      label: 'Choice one.',
      questionId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      label: 'Choice two.',
      questionId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      label: 'Choice three.',
      questionId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      label: 'Question four?',
      questionId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // Question 2
    {
      label: 'Choice one?',
      questionId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      label: 'Choice two?',
      questionId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      label: 'Choice three?',
      questionId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      label: 'Choice four?',
      questionId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {}),

down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Choices', {[Sequelize.Op.or]: [
      {questionId: 1}, 
      {questionId: 2},
      // {questionId: 3},
      // {questionId: 4},
    ]});
  }
};
