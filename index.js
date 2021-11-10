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
            'Quit']
        }
    ])
    .then ((response) => {
        switch (response.action) {
            case 'View all employees':
                break;
            case 'Add employee':
                break;
            case 'Update employee role':
                break;
            case 'View all roles':
                break;
            case 'Add role':
                break;
            case 'View all departments':
                break;
            case 'Add department':
                break;
            case 'Quit':
                break;
        }
    })
}