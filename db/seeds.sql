INSERT INTO `department` (`name`)
VALUES ("Sales"),
       ("Human Resources"),
       ("Administration"),
       ("Finance"),
       ("Warehouse");


INSERT INTO `role` (`title`, `salary`, `department_id`)
VALUES ("Manager", "120000", 1),
       ("Sales Executive", "80000", 2),
       ("Coordinator", "60000", 3),
       ("Account Manager", "70000", 4);


INSERT INTO `employee` (`first_name`, `last_name`, `role_id`, `manager_id`)
VALUES ("Shane", "Smith", 2, NULL),
       ("Lucy", "Taj", 4, 1),
       ("Kelsey", "Jones", 4, 1),
       ("Tim", "Porter", 1, 1),
       ("Sue", "Lime", 3, 2),
       ("Troy", "Harbor", 3, 2);