// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    // [0] title
    'What is your project TITLE?\n',
    // [1] description
    'Provide a short DESCRIPTION explaining the what, why, and how of your project.' +
    '\n  Use the following questions as a guide:' +
    '\n   - What was your motivation?' +
    '\n   - Why did you build this project?' +
    '\n   - What problem does it solve?' +
    '\n   - What did you learn?\n',
    // [2] installation
    'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.\n',
    // [3] usage
    'Provide instructions and examples for use.\n',
    // [4] fullname
    'What is your FULL NAME?\n',
    // [5] github
    'What is your GITHUB USERNAME?\n',
    // [6] email
    'What is your EMAIL?\n',
    // [7] colab
    'List your collaborators, if any, with links to their GitHub profiles.\n',
    // [8] license
    'Select LICENSE if applicable.'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title',
            },
            {
                type: 'input',
                message: questions[1],
                name: 'description',
            },
            {
                type: 'input',
                message: questions[2],
                name: 'install',
            },
            {
                type: 'input',
                message: questions[3],
                name: 'usage',
            }, 
            {
                type: 'input',
                message: questions[4],
                name: 'fullname'
            },
            {
                type: 'input',
                message: questions[5],
                name: 'github'
            },
            {
                type: 'input',
                message: questions[6],
                name: 'email'
            },
            {
                type: 'input',
                message: questions[7],
                name: 'colab'
            },
            {
                type: 'list',
                message: questions[8],
                choices: ['MIT', 'APACHE2.0', 'AFL-3.0', 'GPL-3.0', 'none'],
                name: 'license'
            },
        ])
        .then((response) => {
            console.log(response);
        })
}

// Function call to initialize app
init();
