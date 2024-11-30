'use strict';

const { console } = require('node:inspector/promises');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        password: 'password',
        role_id: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,

  },
  {
    name: 'Jane Doe',
    email: 'janedoe@gmail.com',
    password: 'password',
    role_id: null,
    created_at: new Date(),
    updated_at: new Date(),
    deleted_at: null,
  }
]
);
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', { 
      email: { [Sequelize.Op.in]: ['johndoe@gmail.com', 'janedoe@gmail.com'] } 
    }, {});
  }
};