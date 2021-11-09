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
            choices: ['View all employees', 'Add employee', 'Update employee role', 'View all roles', 'Add role', 'View all departments', 'Add department', 'Quit']
        }
    ])
}