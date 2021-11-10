CREATE DATABASE IF NOT EXISTS company_db;

USE company_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY (id),
  department_name VARCHAR(30) NOT NULL
);

CREATE TABLE employee_role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY (id),
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,

  FOREIGN KEY (department_id)
  REFERENCES department(id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY (id),
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  manager_id INT REFERENCES employee(id)

  FOREIGN KEY (role_id)
  REFERENCES employee_role(id)
);
