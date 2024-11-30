'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('assignmentsubmissions', [
      {
        assignment_id: 1,
        student_id: 101,
        submission_content: 'JavaScript exercise solutions.',
        status: 'graded',
        grade: 85.5,
        feedback: 'Good job! Improve your variable naming.',
        submitted_at: new Date('2024-12-01T10:00:00'),
        graded_at: new Date('2024-12-02T15:30:00'),
      },
      {
        assignment_id: 2,
        student_id: 102,
        submission_content: 'SQL join examples.',
        status: 'pending',
        grade: null,
        feedback: null,
        submitted_at: new Date('2024-12-03T14:00:00'),
        graded_at: null,

      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('assignmentsubmissions', null, {});
  },
};
