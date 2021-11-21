const inquirer = require('inquirer');
const express = require('express');
const db = require('./db')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

init();

function init() {
    chooseAction();
}

function chooseAction() {
    inquirer.prompt ([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'action',
            choices: [
            'View all employees', 
            'Add employee', 
            'Update employee role', 
            'View all roles', 
            'Add role', 
            'View all departments', 
            'Add department',
            // Bonus actions
            // Update department
            // 'Update employee manager',
            // 'View employees by manager',
            // 'View employees by department',
            // 'Delete department',
            // 'Delete role',
            // 'Delete employee',
            // 'View total utilized budget of department',
            'Quit']
        }
    ])
    .then ((response) => {
        switch (response.action) {
            case 'View all employees':
                readEmployees();
                break;
            case 'Add employee':
                createEmployee();
                break;
            case 'Update employee role':
                updateEmployee();
                break;
            case 'View all roles':
                readRoles();
                break;
            case 'Add role':
                createRole();
                break;
            case 'View all departments':
                readDepartments();
                break;
            case 'Add department':
                createDepartment();
                break;
            case 'Quit':
                endApp();
                break;
        }
    })
}

function readDepartments() {
    db.viewDepartments()
    .then(([rows]) => {
        let dept = rows;
        console.table("\n")
        console.table(rows)
    })
    .then(()=> chooseAction())
}