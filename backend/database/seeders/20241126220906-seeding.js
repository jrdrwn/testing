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
    await queryInterface.bulkInsert('userroles', [
      {
        role_name: 'admin',
        description: 'Responsible for managing the platform and users.',
      },
      {
        role_name: 'instructor',
        description: 'Can create and manage courses and materials.',
      },
      {
        role_name: 'student',
        description: 'Enrolled in courses and can access learning materials.',
      },
      {
        role_name: 'mentor',
        description: 'Monitors forums and ensures community guidelines are followed.',
      },
      {
        role_name: 'counselor',
        description: 'Provides guidance and support to students.',
      },
    ]);

    await queryInterface.bulkInsert('users', [
      {
        user_id: 1,
        google_id: null,
        name: 'Admin Pintura',
        email: 'admin@pintura.com',
        password: 'password',
        role_id: 1, // admin
        email_verified: '1',
        email_verification_token: null,
        email_verification_token_expires: null,
        reset_password_token: null,
        reset_password_token_expires: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        user_id: 2,
        google_id: null,
        name: 'John Instructor', 
        email: 'instructor@pintura.com',
        password: 'password',
        role_id: 2, // instructor
        email_verified: '1',
        email_verification_token: null,
        email_verification_token_expires: null,
        reset_password_token: null,
        reset_password_token_expires: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        user_id: 3,
        google_id: null,
        name: 'Sarah Student',
        email: 'student@pintura.com', 
        password: 'password',
        role_id: 3, // student
        email_verified: '1',
        email_verification_token: null,
        email_verification_token_expires: null,
        reset_password_token: null,
        reset_password_token_expires: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        user_id: 4,
        google_id: null,
        name: 'Mike Mentor',
        email: 'mentor@pintura.com',
        password: 'password',
        role_id: 4, // mentor
        email_verified: '1',
        email_verification_token: null,
        email_verification_token_expires: null,
        reset_password_token: null,
        reset_password_token_expires: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        user_id: 5,
        google_id: null,
        name: 'Clara Counselor',
        email: 'counselor@pintura.com',
        password: 'password',
        role_id: 5, // counselor
        email_verified: '1',
        email_verification_token: null,
        email_verification_token_expires: null,
        reset_password_token: null,
        reset_password_token_expires: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      }
    ]);
    await queryInterface.bulkInsert('categoriescourses', [
      {
        category_Id: 1,
        name: 'Programming',
        description: 'Learn the basics of programming using Python.',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        category_Id: 2,
        name: 'Web Development',
        description: 'Build dynamic and responsive websites with HTML, CSS, and JavaScript.',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        category_Id: 3,
        name: 'Database Management',
        description: 'Understand database systems and learn SQL.',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        category_Id: 4,
        name: 'Data Science',
        description: 'Explore data analysis, visualization, and machine learning.',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        category_Id: 5,
        name: 'Cybersecurity',
        description: 'Learn about network security, cryptography, and ethical hacking.',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        category_Id: 6,
        name: 'Cloud Computing',
        description: 'Understand cloud platforms and services, such as AWS and Azure.',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      }

    ]);

    await queryInterface.bulkInsert('courses', [
      {
        course_id: 1,
        title: 'Introduction to Programming',
        description: 'Learn the basics of programming using Python.',
        category_id: 1,
        price: 0,
        image_url: 'https://student-activity.binus.ac.id/bncc/wp-content/uploads/sites/23/2023/06/unnamed-18.png',
        institution: 'Binus University',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        course_id: 2,
        title: 'Web Development',
        description: 'Build dynamic and responsive websites with HTML, CSS, and JavaScript.',
        category_id: 2,
        price: 0,
        image_url: 'https://www.creative-tim.com/blog/content/images/size/w960/2022/01/which-development-job-is-right-for-you.jpg',
        institution: 'nganu university',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        course_id: 3,
        title: 'Database Management',
        description: 'Understand database systems and learn SQL.',
        category_id: 3,
        price: 0,
        image_url: 'https://miro.medium.com/v2/resize:fit:1400/1*szBsfY6lp8A0jb1zOvJ0mw.jpeg',
        institution: 'nganu company',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        course_id: 4,
        title: 'Data Analysis with Python',
        description: 'Explore data analysis techniques using Python and popular libraries.',
        category_id: 4,
        price: 0,
        image_url: 'https://miro.medium.com/v2/resize:fit:1024/1*CvcM2chQox1VGJnWQO3acg.png',
        institution: 'jagopiton company',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        course_id: 5,
        title: 'Ethical Hacking',
        description: 'Learn about penetration testing, network security, and ethical hacking.',
        category_id: 5,
        price: 0,
        image_url: 'https://i.ytimg.com/vi/4MC6s6wS5CI/hqdefault.jpg',
        institution: 'nganu company',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        course_id: 6,
        title: 'AWS Fundamentals',
        description: 'Understand the basics of cloud computing and Amazon Web Services.',
        category_id: 6,
        price: 0,
        image_url: 'https://images.squarespace-cdn.com/content/v1/60cfd646701da4034512a1c5/1654217981309-RTSZMBJWA9YJ5V32UN8R/AWS-Cloud.png',
        institution: 'boncos company',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
    ]);
    await queryInterface.bulkInsert('badges', [
      {
        name: 'Achievement Starter',
        description: 'Awarded for starting your learning journey.',
        Image_url: 'https://example.com/images/badges/starter.png',
        requirement: 'Sign up and complete your profile.',
        created_at: new Date(),
      },
      {
        name: 'Knowledge Explorer',
        description: 'Given to those who explore 10 different topics.',
        Image_url: 'https://example.com/images/badges/explorer.png',
        requirement: 'Explore at least 10 topics on the platform.',
        created_at: new Date(),
      },
      {
        name: 'Task Master',
        description: 'For completing 50 tasks in any course.',
        Image_url: 'https://example.com/images/badges/taskmaster.png',
        requirement: 'Complete 50 tasks across any courses.',
        created_at: new Date(),
      },
      {
        name: 'Collaboration Champion',
        description: 'Awarded for engaging in group discussions.',
        Image_url: 'https://example.com/images/badges/champion.png',
        requirement: 'Participate in at least 5 group discussions.',
        created_at: new Date(),
      },
      {
        name: 'Goal Setter',
        description: 'For setting and achieving your first learning goal.',
        Image_url: 'https://example.com/images/badges/goalsetter.png',
        requirement: 'Set and achieve one learning goal.',
        created_at: new Date(),
      },
    ]);
    await queryInterface.bulkInsert('enrollments', [
      {
        student_Id: 3,
        course_Id: 1,
        progress: 25.5, // Float value
        completion_date: null,
        enrolled_at: new Date('2024-11-01T10:00:00Z'),
      },
      {
        student_Id: 4,
        course_Id: 2,
        progress: 75.2, // Float value
        completion_date: new Date('2024-11-25T15:30:00Z'),
        enrolled_at: new Date('2024-11-05T12:00:00Z'),
      },
      {
        student_Id: 5,
        course_Id: 3,
        progress: 100.0, // Float value (completed)
        completion_date: new Date('2024-11-20T09:00:00Z'),
        enrolled_at: new Date('2024-10-15T14:00:00Z'),
      },
      {
        student_Id: 3,
        course_Id: 4,
        progress: 50.75, // Float value
        completion_date: null,
        enrolled_at: new Date('2024-11-10T08:30:00Z'),
      },
      {
        student_Id: 4,
        course_Id: 5,
        progress: 10.0, // Float value
        completion_date: null,
        enrolled_at: new Date('2024-11-15T11:45:00Z'),
      }
    ]);
    await queryInterface.bulkInsert('forums', [
      {
        course_Id: 1,
        title: 'Introduction to Programming',
        description: 'A forum to discuss the basics of programming, share resources, and ask questions.',
        created_at: new Date('2024-11-01T10:00:00Z'),
        updated_at: new Date('2024-11-01T10:00:00Z'),
        deleted_at: null,
      },
      {
        course_Id: 1,
        title: 'Advanced JavaScript',
        description: 'Dive into advanced JavaScript topics, including closures, async/await, and more.',
        created_at: new Date('2024-11-05T12:00:00Z'),
        updated_at: new Date('2024-11-05T12:00:00Z'),
        deleted_at: null,
      },
      {
        course_Id: 2,
        title: 'Data Structures and Algorithms',
        description: 'Discuss algorithms, problem-solving strategies, and best practices for competitive programming.',
        created_at: new Date('2024-10-15T14:00:00Z'),
        updated_at: new Date('2024-10-15T14:00:00Z'),
        deleted_at: null,
      },
      {
        course_Id: 2,
        title: 'Introduction to Databases',
        description: 'A place to ask questions and share resources related to database management and design.',
        created_at: new Date('2024-11-10T08:30:00Z'),
        updated_at: new Date('2024-11-10T08:30:00Z'),
        deleted_at: null,
      },
      {
        course_Id: 3,
        title: 'Web Development Basics',
        description: 'Learn and discuss the fundamentals of building web applications, from HTML to deployment.',
        created_at: new Date('2024-11-20T16:00:00Z'),
        updated_at: new Date('2024-11-20T16:00:00Z'),
        deleted_at: null,
      }
    ]);
    await queryInterface.bulkInsert('ranks', [
      {
        
        name: 'Beginner',
        min_exp_required: 0,
        description: 'Level pemula untuk pengguna baru.',
        created_at: new Date('2024-11-01T08:00:00Z'),
      },
      {
        
        name: 'Intermediate',
        min_exp_required: 1000,
        description: 'Level menengah untuk pengguna dengan pengalaman sedang.',
        created_at: new Date('2024-11-02T08:00:00Z'),
      },
      {
        
        name: 'Advanced',
        min_exp_required: 2500,
        description: 'Level lanjutan untuk pengguna berpengalaman.',
        created_at: new Date('2024-11-03T08:00:00Z'),
      },
      {
        
        name: 'Expert',
        min_exp_required: 5000,
        description: 'Level ahli untuk pengguna yang sangat berpengalaman.',
        created_at: new Date('2024-11-04T08:00:00Z'),
      },
      {
        
        name: 'Legendary',
        min_exp_required: 10000,
        description: 'Level legendaris untuk pengguna dengan pencapaian luar biasa.',
        created_at: new Date('2024-11-05T08:00:00Z'),
      },
    ]);
    await queryInterface.bulkInsert('gamifications', [
      {
        student_Id: 3,
        exp_points: 2500,
        rank_Id: 3,
        created_at: new Date('2024-11-01T09:30:00Z'),
        updated_at: new Date('2024-11-01T09:30:00Z'),
        deleted_at: null,
      },
      {
        student_Id: 4,
        exp_points: 1200,
        rank_Id: 2,
        created_at: new Date('2024-11-02T14:45:00Z'),
        updated_at: new Date('2024-11-02T14:45:00Z'),
        deleted_at: null,
      },
      {
        student_Id: 5,
        exp_points: 800,
        rank_Id: 1,
        created_at: new Date('2024-11-03T16:20:00Z'),
        updated_at: new Date('2024-11-03T16:20:00Z'),
        deleted_at: null,
      },
      {
        student_Id: 4,
        exp_points: 3400,
        rank_Id: 4,
        created_at: new Date('2024-11-04T11:10:00Z'),
        updated_at: new Date('2024-11-04T11:10:00Z'),
        deleted_at: null,
      },
      {
        student_Id: 3,
        exp_points: 150,
        rank_Id: 1,
        created_at: new Date('2024-11-05T13:50:00Z'),
        updated_at: new Date('2024-11-05T13:50:00Z'),
        deleted_at: null,
      },
    ]);
    await queryInterface.bulkInsert('materials', [
      {
        
        course_id: 1,
        type: 'video',
        content: 'https://example.com/videos/introduction.mp4',
        created_at: new Date('2024-11-01T08:00:00Z'),
        updated_at: new Date('2024-11-01T08:00:00Z'),
        deleted_at: null,
      },
      {
          
          course_id: 2,
          type: 'text',
          content: 'https://example.com/docs/course-outline.pdf',
          created_at: new Date('2024-11-02T08:00:00Z'),
          updated_at: new Date('2024-11-02T08:00:00Z'),
          deleted_at: null,
        },
        {
          
          course_id: 3,
          type: 'quiz',
          content: 'https://example.com/articles/getting-started.html',
          created_at: new Date('2024-11-03T08:00:00Z'),
          updated_at: new Date('2024-11-03T08:00:00Z'),
          deleted_at: null,
        },
        {
          
          course_id: 2,
          type: 'video',
          content: 'https://example.com/quizzes/chapter1-quiz.html',
          created_at: new Date('2024-11-04T08:00:00Z'),
          updated_at: new Date('2024-11-04T08:00:00Z'),
          deleted_at: null,
        },
        {
          
          course_id: 3,
          type: 'video',
          content: 'https://example.com/videos/chapter2-overview.mp4',
          created_at: new Date('2024-11-05T08:00:00Z'),
          updated_at: new Date('2024-11-05T08:00:00Z'),
          deleted_at: null,
    }
  ]);
  await queryInterface.bulkInsert('notifications', [
    {
      
      student_id: 3,
      title: 'Welcome to the Course!',
      message: 'Congratulations on enrolling in the JavaScript Basics course!',
      is_read: false,
      created_at: new Date('2024-11-01T10:00:00Z'),
    },
    {
      
      student_id: 4,
      title: 'New Assignment Available',
      message: 'A new assignment for Python Advanced is now available. Check it out!',
      is_read: false,
      created_at: new Date('2024-11-02T11:00:00Z'),
    },
    {
      
      student_id: 3,
      title: 'Course Progress Update',
      message: 'You’ve completed 50% of the JavaScript Basics course. Keep going!',
      is_read: true,
      created_at: new Date('2024-11-03T12:00:00Z'),
    },
    {
      
      student_id: 4,
      title: 'Live Session Reminder',
      message: 'Don’t forget to join the live session for Data Structures at 3 PM today.',
      is_read: false,
      created_at: new Date('2024-11-04T09:00:00Z'),
    },
    {
      
      student_id: 5,
      title: 'Certificate Available',
      message: 'Your certificate for Machine Learning Basics is now available for download.',
      is_read: true,
      created_at: new Date('2024-11-05T14:00:00Z'),
    },
  ]);
  await queryInterface.bulkInsert('paymentmethods', [
    {
      
      name: 'Credit Card',
      description: 'Payment using Visa, MasterCard, or American Express.',
      is_active: true,
      created_at: new Date('2024-11-01T10:00:00Z'),
    },
    {
      
      name: 'Bank Transfer',
      description: 'Direct payment via bank account transfer.',
      is_active: true,
      created_at: new Date('2024-11-02T11:00:00Z'),
    },
    {
      
      name: 'E-Wallet',
      description: 'Use popular e-wallets like PayPal, OVO, or GoPay.',
      is_active: true,
      created_at: new Date('2024-11-03T12:00:00Z'),
    },
    {
      
      name: 'Cash on Delivery',
      description: 'Pay with cash when the product is delivered.',
      is_active: false,
      created_at: new Date('2024-11-04T09:00:00Z'),
    },
    {
      
      name: 'Cryptocurrency',
      description: 'Pay using Bitcoin, Ethereum, or other cryptocurrencies.',
      is_active: true,
      created_at: new Date('2024-11-05T14:00:00Z'),
    },
  ]);
  await queryInterface.bulkInsert('posts', [
    {
      forum_id: 1,
      user_id: 1,
      content: 'I found this course really helpful, but I am stuck on lesson 3.',
      created_at: new Date('2024-11-01T10:30:00Z'),
      updated_at: new Date('2024-11-01T10:30:00Z'),
      deleted_at: null,
    },
    {
      forum_id: 2,
      user_id: 2,
      content: 'Have you tried reviewing the supplemental material? It helped me a lot.',
      created_at: new Date('2024-11-01T11:00:00Z'),
      updated_at: new Date('2024-11-01T11:00:00Z'),
      deleted_at: null,
    },
    {
      forum_id: 3,
      user_id: 3,
      content: 'Can anyone recommend other resources for advanced topics?',
      created_at: new Date('2024-11-02T09:45:00Z'),
      updated_at: new Date('2024-11-02T09:45:00Z'),
      deleted_at: null,
    },
    {
      forum_id: 2,
      user_id: 4,
      content: 'I suggest checking out the instructor’s blog; it has great content!',
      created_at: new Date('2024-11-02T10:15:00Z'),
      updated_at: new Date('2024-11-02T10:15:00Z'),
      deleted_at: null,
    },
    {
      forum_id: 3,
      user_id: 5,
      content: 'When will the next module be released?',
      created_at: new Date('2024-11-03T14:20:00Z'),
      updated_at: new Date('2024-11-03T14:20:00Z'),
      deleted_at: null,
    },
  ]);

  await queryInterface.bulkInsert('courseorders', [
    {
      student_id: 3,
      course_id: 1,
      order_number: 'ORD123456',
      total_price: 500000,
      payment_method_id: 1,
      payment_status: 'Completed',
      payment_proof: 'https://example.com/payment-proof/ORD123456.png',
      payment_date: new Date('2024-11-28 10:00:00'),
      expired_at: new Date('2024-11-30 23:59:59'),
      notes: 'First payment for advanced course.',
      order_date: new Date('2024-11-28 09:30:00'),
      updated_at: new Date(),
      deleted_at: null,
    },
    {
      student_id: 4,
      course_id: 2,
      order_number: 'ORD123457',
      total_price: 300000,
      payment_method_id: 2,
      payment_status: 'Pending',
      payment_proof: null,
      payment_date: null,
      expired_at: new Date('2024-12-01 23:59:59'),
      notes: 'Waiting for confirmation.',
      order_date: new Date('2024-11-29 08:45:00'),
      updated_at: new Date(),
      deleted_at: null,
    },
    {
      student_id: 5,
      course_id: 3,
      order_number: 'ORD123458',
      total_price: 400000,
      payment_method_id: 3,
      payment_status: 'Failed',
      payment_proof: null,
      payment_date: null,
      expired_at: new Date('2024-11-30 23:59:59'),
      notes: 'Payment failed due to insufficient funds.',
      order_date: new Date('2024-11-28 11:15:00'),
      updated_at: new Date(),
      deleted_at: null,
    },
  ]);
  await queryInterface.bulkInsert('studentbadges', [
    {
      student_id: 3,
      badge_id: 4,
      earned_at: new Date('2024-11-15 14:00:00'),
    },
    {
      student_id: 4,
      badge_id: 5,
      earned_at: new Date('2024-11-20 10:30:00'),
    },
    {
      student_id: 5,
      badge_id: 3,
      earned_at: new Date('2024-11-22 16:45:00'),
    },
    {
      student_id: 3,
      badge_id: 2,
      earned_at: new Date('2024-11-28 09:15:00'),
    },
    {
      student_id: 4,
      badge_id: 1,
      earned_at: new Date('2024-11-29 08:00:00'),
    },
  ]);
  await queryInterface.bulkInsert('mentorships', [
    {
      mentor_id: 2,
      mentee_id: 5,
      status: 'active',
      created_at: new Date('2024-11-01 09:00:00'),
      updated_at: new Date('2024-11-20 09:00:00'),
      deleted_at: null,
    },
    {
      mentor_id: 2,
      mentee_id: 4,
      status: 'pending',
      created_at: new Date('2024-11-15 10:00:00'),
      updated_at: new Date('2024-11-15 10:00:00'),
      deleted_at: null,
    },
    {
      mentor_id: 2,
      mentee_id: 3,
      status: 'completed',
      created_at: new Date('2024-10-20 08:30:00'),
      updated_at: new Date('2024-11-18 15:45:00'),
      deleted_at: null,
    }
  ]);
  await queryInterface.bulkInsert('invoices', [
    {
      order_id: 1,
      invoice_number: 'INV-20241101-001',
      subtotal: 500000,
      discount: 50000,
      tax: 45000,
      total: 495000,
      created_at: new Date('2024-11-01 10:00:00'),
    },
    {
      order_id: 2,
      invoice_number: 'INV-20241101-002',
      subtotal: 300000,
      discount: 30000,
      tax: 27000,
      total: 297000,
      created_at: new Date('2024-11-02 14:30:00'),
    },
    {
      order_id: 3,
      invoice_number: 'INV-20241101-003',
      subtotal: 750000,
      discount: 75000,
      tax: 67500,
      total: 742500,
      created_at: new Date('2024-11-03 09:15:00'),
    },

  ]);
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
    {
      course_id: 3,
      title: 'Building a RESTful API',
      description: 'Create a RESTful API using Node.js and Express.',
      due_date: new Date('2024-12-20T23:59:59'),
      created_at: new Date(),
    },
    {
      course_id: 4,
      title: 'Data Visualization with Python',
      description: 'Use Matplotlib and Seaborn to create visualizations from data.',
      due_date: new Date('2024-12-25T23:59:59'),
      created_at: new Date(),
    },
    {
      course_id: 5,
      title: 'Network Security Fundamentals',
      description: 'Learn about common network security threats and defenses.',
      due_date: new Date('2024-12-30T23:59:59'),
      created_at: new Date(),
    }
  ]);
  await queryInterface.bulkInsert('assignmentsubmissions', [
    {
      assignment_id: 2,
      student_id: 4,
      submission_content: 'JavaScript exercise solutions.',
      status: 'graded',
      grade: 85.5,
      feedback: 'Good job! Improve your variable naming.',
      submitted_at: new Date('2024-12-01T10:00:00'),
      graded_at: new Date('2024-12-02T15:30:00'),
    },
    {
      assignment_id: 2,
      student_id: 5,
      submission_content: 'SQL join examples.',
      status: 'pending',
      grade: null,
      feedback: null,
      submitted_at: new Date('2024-12-03T14:00:00'),
      graded_at: null,

    },
  ]);
  await queryInterface.bulkInsert('refunds', [
    {
      order_id: 3,
      reason: 'Product was defective.',
      refund_amount: 100.00,
      status: 'completed',
      processed_at: new Date('2024-11-02T12:00:00Z'),
      created_at: new Date('2024-11-01T10:00:00Z'),
      updated_at: new Date('2024-11-02T12:00:00Z'),
    },
    {
      order_id: 2,
      reason: 'Late delivery.',
      refund_amount: 20.00,
      status: 'approved',
      processed_at: new Date('2024-11-05T14:00:00Z'),
      created_at: new Date('2024-11-04T16:00:00Z'),
      updated_at: new Date('2024-11-05T14:00:00Z'),
    },
    {
      order_id: 1,
      reason: 'Duplicate order.',
      refund_amount: 30.00,
      status: 'completed',
      processed_at: new Date('2024-11-06T10:00:00Z'),
      created_at: new Date('2024-11-05T09:00:00Z'),
      updated_at: new Date('2024-11-06T10:00:00Z'),
    },
  ]);
  await queryInterface.bulkInsert('stripe_transactions', [
    {
      id:1,
      user_id: 3,
      name: 'Sarah Student',
      phone: '+628938938938',
      session_id: 'cs_test_b1c4f9b5-6e7c-4d2b-8e2d-6b5a3e3f8b8d',
      amount: 500000,
      quantity: 2,
      status: 'Success',
      created_at: new Date('2024-11-01T10:00:00Z'),
      updated_at: new Date('2024-11-01T10:00:00Z'),
      deleted_at: null,
    },
    {
      id:2,
      user_id: 4,
      name: 'Mike Mentor',
      phone: '+628938938938',
      session_id: 'cs_test_1a2b3c4d-5e6f-7a8b-9c0d1e2f3a4b',
      amount: 300000,
      quantity: 1,
      status: 'Success',
      created_at: new Date('2024-11-02T11:00:00Z'),
      updated_at: new Date('2024-11-02T11:00:00Z'),
      deleted_at: null,
    },
    {
      id:3,
      user_id: 5,
      name: 'Clara Counselor',
      phone: '+628938938938',
      session_id: 'cs_test_5a6b7c8d-9e0f-1a2b-3c4d5e6f7a8b',
      amount: 400000,
      quantity: 1,
      status: 'Failed',
      created_at: new Date('2024-11-03T12:00:00Z'),
      updated_at: new Date('2024-11-03T12:00:00Z'),
      deleted_at: null,
    }
  ]);
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', { 
      email: { [Sequelize.Op.in]: ['johndoe@gmail.com', 'janedoe@gmail.com'] } 
    }, {});
  }
};