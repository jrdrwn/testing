'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('assignments', [
      {
        course_id: 1, // Sesuaikan dengan ID course yang ada
        title: 'Introduction to JavaScript',
        description: 'Complete the basic JavaScript exercises.',
        due_date: new Date('2024-12-10T23:59:59'),
        created_at: new Date(),
      },
      {
        course_id: 2,
        title: 'Understanding SQL Joins',
        description: 'Write queries to demonstrate different types of joins.',
        due_date: new Date('2024-12-15T23:59:59'),
        created_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('assignments', null, {});
  },
};
