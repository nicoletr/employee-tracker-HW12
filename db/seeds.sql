INSERT INTO department (id, department_name)
VALUES (1, "Sales"),
       (2, "Human Resources"),
       (3, "Administration"),
       (4, "Finance"),
       (5, "Warehouse");


INSERT INTO employee_role (id, title, salary, department_id)
VALUES (1, "Manager", "120000", 1),
       (2, "Sales Executive", "80000", 2),
       (3, "Coordinator", "60000", 3),
       (4,"Account Manager", "70000", 4);


INSERT INTO employee (id, first_name, last_name, role_id)
VALUES (1, "Shane", "Smith", 2),
       (2, "Lucy", "Taj", 4),
       (3, "Kelsey", "Jones", 4),
       (4, "Tim", "Porter", 1),
       (5, "Sue", "Lime", 3),
       (6, "Troy", "Harbor", 3);