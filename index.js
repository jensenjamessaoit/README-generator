// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    // [0]
    `What is your project TITLE?\n`,
    // [1]
    'Provide a short DESCRIPTION explaining the what, why, and how of your project.' +
    '\n  Use the following questions as a guide:' +
    '\n   - What was your motivation?' +
    '\n   - Why did you build this project?' +
    '\n   - What problem does it solve?' +
    '\n   - What did you learn?\n',
    // [2]
    'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    // [3]
    'List your collaborators, if any, with links to their GitHub profiles.\n  (name: github link)\n',
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
            // {
            //     type: 'input',
            //     message: questions[0],
            //     name: 'title',
            // },
            // {
            //     type: 'input',
            //     message: questions[1],
            //     name: 'description',
            // },
            // {
            //     type: 'input',
            //     message: questions[2],
            //     name: 'installation',
            // },
            {
                type: 'confirm',
                message: 'Did you collaborate with another developer?',
                name: 'colab',
            },
            
        ])
        //  credits
        .then((response) => {
            console.log(response.colab);
            if(response.colab) {
                inquirer.prompt([
                    {
                        type: 'input',
                        message: 'colaborator names',
                        name: 'credits'
                    }
                ]);
            }
            else {
                console.log('no');
            }
        })
}

// Function call to initialize app
init();
