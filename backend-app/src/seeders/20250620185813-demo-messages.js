'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Messages', [
      {
        message: 'This is the first guestbook message! Welcome everyone.',
        user: 'Alice',
        createdAt: new Date(),
      },
      {
        message: 'Hello from the second user. This is a great guestbook.',
        user: 'Bob',
        createdAt: new Date(),
      },
      {
        message: 'Just leaving a note to say I was here. The site looks great!',
        user: 'Charlie',
        createdAt: new Date(),
      },
      {
        message: 'Testing out the seeder functionality. Seems to work perfectly.',
        user: 'Dana',
        createdAt: new Date(),
      },
      {
        message: 'Final message from the seed data. Have a wonderful day!',
        user: 'Eve',
        createdAt: new Date(),
      },
      {
        message: 'This is a test message number 6. Keep up the good work!',
        user: 'Alice',
        createdAt: new Date(),
      },
      {
        message: 'Message number 7 here. Loving the guestbook feature.',
        user: 'Bob',
        createdAt: new Date(),
      },
      {
        message: 'Message 8: Just checking in to see how things are going.',
        user: 'Charlie',
        createdAt: new Date(),
      },
      {
        message: 'Message 9: This is a great way to connect with others.',
        user: 'Dana',
        createdAt: new Date(),
      },
      {
        message: 'Message 10: I hope everyone is having a fantastic day!',
        user: 'Eve',
        createdAt: new Date(),
      },
      {
        message: 'Message 11: Another test message to fill the guestbook.',
        user: 'Alice',
        createdAt: new Date(),
      },
      {
        message: 'Message 12: Just leaving a note to say I was here again.',
        user: 'Bob',
        createdAt: new Date(),
      },
      {
        message: 'Message 13: This guestbook is really coming together nicely.',
        user: 'Charlie',
        createdAt: new Date(),
      },
      {
        message: 'Message 14: I love how easy it is to leave a message here.',
        user: 'Dana',
        createdAt: new Date(),
      },
      {
        message: 'Message 15: Final test message to complete the seed data.',
        user: 'Eve',
        createdAt: new Date(),
      },
      {
        message: 'Message 16: This is a test message number 16. Keep up the good work!',
        user: 'Alice',
        createdAt: new Date(),
      },
      {
        message: 'Message 17: Message number 17 here. Loving the guestbook feature.',
        user: 'Bob',
        createdAt: new Date(),
      },

    ], {});
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Messages', {
      user: ['Alice', 'Bob', 'Charlie', 'Dana', 'Eve']
    }, {});
  }
};