CREATE DATABASE IF NOT EXISTS pintura;

USE pintura;

-- Create tables without foreign key dependencies first
CREATE TABLE userroles (
  role_id int NOT NULL AUTO_INCREMENT,
  role_name enum('admin','instructor','student','counselor','mentor') NOT NULL,
  description text,
  PRIMARY KEY (role_id)
);

CREATE TABLE users (
  user_id int NOT NULL AUTO_INCREMENT,
  google_id varchar(255) DEFAULT NULL,
  name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  role_id int DEFAULT NULL,
  email_verified enum('0','1') DEFAULT '0',
  email_verification_token varchar(6) DEFAULT NULL,
  email_verification_token_expires datetime DEFAULT NULL,
  reset_password_token varchar(6) DEFAULT NULL,
  reset_password_token_expires datetime DEFAULT NULL,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at datetime DEFAULT NULL,
  PRIMARY KEY (user_id),
  UNIQUE KEY email (email),
  UNIQUE KEY google_id (google_id),
  FOREIGN KEY (role_id) REFERENCES userroles(role_id)
);

CREATE TABLE categoriescourses (
  category_id int NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  description text,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at datetime DEFAULT NULL,
  PRIMARY KEY (category_id)
);

CREATE TABLE courses (
  course_id int NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  description text,
  category_id int DEFAULT NULL,
  price decimal(10,2) NOT NULL,
  image_url VARCHAR(255) DEFAULT NULL,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at datetime DEFAULT NULL,
  PRIMARY KEY (course_id),
  FOREIGN KEY (category_id) REFERENCES categoriescourses(category_id)
);

CREATE TABLE assignments (
  assignment_id int NOT NULL AUTO_INCREMENT,
  course_id int DEFAULT NULL,
  title varchar(255) DEFAULT NULL,
  description text,
  due_date datetime DEFAULT NULL,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (assignment_id),
  FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

CREATE TABLE assignmentsubmissions (
  submission_id int NOT NULL AUTO_INCREMENT,
  assignment_id int DEFAULT NULL,
  student_id int DEFAULT NULL,
  submission_content text,
  status enum('pending','grading','graded','late','resubmitted') NOT NULL DEFAULT 'pending',
  grade decimal(5,2) DEFAULT NULL,
  feedback text,
  submitted_at datetime DEFAULT CURRENT_TIMESTAMP,
  graded_at datetime DEFAULT NULL,
  PRIMARY KEY (submission_id),
  FOREIGN KEY (assignment_id) REFERENCES assignments(assignment_id),
  FOREIGN KEY (student_id) REFERENCES users(user_id)
);

CREATE TABLE badges (
  badge_id int NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  description text,
  image_url varchar(255) DEFAULT NULL,
  requirement text,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (badge_id)
);

CREATE TABLE studentbadges (
  student_badge_id int NOT NULL AUTO_INCREMENT,
  student_id int DEFAULT NULL,
  badge_id int DEFAULT NULL,
  earned_at datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (student_badge_id),
  FOREIGN KEY (student_id) REFERENCES users(user_id),
  FOREIGN KEY (badge_id) REFERENCES badges(badge_id)
);

CREATE TABLE counselingsessions (
  session_id int NOT NULL AUTO_INCREMENT,
  counselor_id int DEFAULT NULL,
  student_id int DEFAULT NULL,
  session_date datetime NOT NULL,
  status enum('scheduled','completed','cancelled','no-show') NOT NULL,
  notes text,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at datetime DEFAULT NULL,
  PRIMARY KEY (session_id),
  FOREIGN KEY (counselor_id) REFERENCES users(user_id),
  FOREIGN KEY (student_id) REFERENCES users(user_id)
);

CREATE TABLE paymentmethods (
  payment_method_id int NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  description text,
  is_active tinyint(1) DEFAULT '1',
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (payment_method_id)
);

CREATE TABLE courseorders (
  order_id int NOT NULL AUTO_INCREMENT,
  student_id int DEFAULT NULL,
  course_id int DEFAULT NULL,
  order_number varchar(50) NOT NULL,
  total_price decimal(10,2) NOT NULL,
  payment_method_id int DEFAULT NULL,
  payment_status enum('pending','completed','failed','refunded','expired') NOT NULL,
  payment_proof varchar(255) DEFAULT NULL,
  payment_date datetime DEFAULT NULL,
  expired_at datetime DEFAULT NULL,
  notes text,
  order_date datetime DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at datetime DEFAULT NULL,
  PRIMARY KEY (order_id),
  UNIQUE KEY order_number (order_number),
  FOREIGN KEY (student_id) REFERENCES users(user_id),
  FOREIGN KEY (course_id) REFERENCES courses(course_id),
  FOREIGN KEY (payment_method_id) REFERENCES paymentmethods(payment_method_id)
);

CREATE TABLE enrollments (
  enrollment_id int NOT NULL AUTO_INCREMENT,
  student_id int DEFAULT NULL,
  course_id int DEFAULT NULL,
  progress float DEFAULT '0',
  completion_date datetime DEFAULT NULL,
  enrolled_at datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (enrollment_id),
  FOREIGN KEY (student_id) REFERENCES users(user_id),
  FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

CREATE TABLE forums (
  forum_id int NOT NULL AUTO_INCREMENT,
  course_id int DEFAULT NULL,
  title varchar(255) NOT NULL,
  description text,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at datetime DEFAULT NULL,
  PRIMARY KEY (forum_id),
  FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

CREATE TABLE ranks (
  rank_id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  min_exp_required int NOT NULL,
  description text,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (rank_id)
);

CREATE TABLE gamifications (
  gamification_id int NOT NULL AUTO_INCREMENT,
  student_id int DEFAULT NULL,
  exp_points int DEFAULT '0',
  rank_id int DEFAULT NULL,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at datetime DEFAULT NULL,
  PRIMARY KEY (gamification_id),
  FOREIGN KEY (student_id) REFERENCES users(user_id),
  FOREIGN KEY (rank_id) REFERENCES ranks(rank_id)
);

CREATE TABLE invoices (
  invoice_id int NOT NULL AUTO_INCREMENT,
  order_id int DEFAULT NULL,
  invoice_number varchar(50) NOT NULL,
  subtotal decimal(10,2) NOT NULL,
  discount decimal(10,2) DEFAULT '0.00',
  tax decimal(10,2) DEFAULT '0.00',
  total decimal(10,2) NOT NULL,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (invoice_id),
  UNIQUE KEY invoice_number (invoice_number),
  FOREIGN KEY (order_id) REFERENCES courseorders(order_id)
);

CREATE TABLE materials (
  material_id int NOT NULL AUTO_INCREMENT,
  course_id int DEFAULT NULL,
  type enum('video','text','quiz') NOT NULL,
  content text,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at datetime DEFAULT NULL,
  PRIMARY KEY (material_id),
  FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

CREATE TABLE mentorships (
  mentorship_id int NOT NULL AUTO_INCREMENT,
  mentor_id int DEFAULT NULL,
  mentee_id int DEFAULT NULL,
  status enum('active','pending','completed','cancelled') NOT NULL,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at datetime DEFAULT NULL,
  PRIMARY KEY (mentorship_id),
  FOREIGN KEY (mentor_id) REFERENCES users(user_id),
  FOREIGN KEY (mentee_id) REFERENCES users(user_id)
);

CREATE TABLE notifications (
  notification_id int NOT NULL AUTO_INCREMENT,
  student_id int DEFAULT NULL,
  title varchar(255) DEFAULT NULL,
  message text,
  is_read tinyint(1) DEFAULT '0',
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (notification_id),
  FOREIGN KEY (student_id) REFERENCES users(user_id)
);

CREATE TABLE posts (
  post_id int NOT NULL AUTO_INCREMENT,
  forum_id int DEFAULT NULL,
  user_id int DEFAULT NULL,
  content text NOT NULL,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at datetime DEFAULT NULL,
  PRIMARY KEY (post_id),
  FOREIGN KEY (forum_id) REFERENCES forums(forum_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE refunds (
  refund_id int NOT NULL AUTO_INCREMENT,
  order_id int DEFAULT NULL,
  reason text NOT NULL,
  refund_amount decimal(10,2) NOT NULL,
  status enum('pending','approved','rejected','completed') NOT NULL,
  processed_at datetime DEFAULT NULL,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (refund_id),
  FOREIGN KEY (order_id) REFERENCES courseorders(order_id)
);