const fs = require('fs');
const inquirer = require('inquirer');

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
                viewEmployees();
                break;
            case 'Add employee':
                addEmployee();
                break;
            case 'Update employee role':
                updateEmployee();
                break;
            case 'View all roles':
                viewRoles();
                break;
            case 'Add role':
                addRole();
                break;
            case 'View all departments':
                viewDepartments();
                break;
            case 'Add department':
                addDepartment();
                break;
            case 'Quit':
                endApp();
                break;
        }
    })
}