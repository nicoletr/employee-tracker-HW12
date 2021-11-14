DROP DATABASE IF EXISTS `company_db`;
CREATE DATABASE `company_db`;

USE `company_db`;

-- Create Department
CREATE TABLE IF NOT EXISTS `departments`(
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,

  PRIMARY KEY (`id`)
);

-- Create Roles
CREATE TABLE IF NOT EXISTS `roles`(
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `salary` DECIMAL NULL DEFAULT NULL,
  `department_id` INT UNSIGNED NOT NULL,

  PRIMARY KEY (`id`),

  FOREIGN KEY (`department_id`)
  REFERENCES `departments`(`id`)
  ON DELETE CASCADE
);

-- Create Employee
CREATE TABLE IF NOT EXISTS `employee`(
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `role_id` INT UNSIGNED NOT NULL,
  `manager_id` INT UNSIGNED NULL DEFAULT NULL,

  PRIMARY KEY (`id`),

  FOREIGN KEY (`role_id`)
  REFERENCES `roles`(`id`)
  ON DELETE CASCADE,

  FOREIGN KEY (`manager_id`)
  REFERENCES `employee`(`id`)
  ON DELETE RESTRICT
);
