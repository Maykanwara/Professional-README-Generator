const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");

const generateMarkdown = require('./generateMarkdown');


function init() {
    getAnswers()
};

function getAnswers() {
    inquirer
        .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title'
        },
        {
            type: 'list',
            message: 'Choose the appropriate license for this project',
            name: 'license',
            choices: [
                'BSD',
                'MIT',
                'IBM',
                'Apache',
                'Boost',
            ]
        },
        {
            type: 'input',
            message: 'Describe your project: ',
            name: 'description',
        },
        
        {
            type: 'input',
            message: 'List any installation instructions for this project ',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'List any usage instructions for this project: ',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'List any contributors  for this project: ',
            name: 'contributors',
        },
        {
            type: 'input',
            message: 'List any testing instructions  for this project: ',
            name: 'tests',

        },
        {
            type: 'input',
            message: 'what is your Github name: ',
            name: 'github',
        },
        {
            type: 'input',
            message: 'what is your email address ',
            name: 'email',
            }
        ])
        .then(function(data) {
            writeFile("README.md", generateMarkdown(data));
            console.log(data)
        })
    }   

function writeFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        
        } else {
            console.log("success")
        };
    })
}

// function init() {
    // inquirer.prompt(questions)
        // .then(function(data) {
        //     writeFile("README.md", generateMarkdown(data));
        //     console.log(data)
        // })

//     .then(answers => {
//         renderLicense(answer)
//         generateMarkdown(answer)
//     })
// }

 init();



















