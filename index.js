const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require('./generateReadme');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions for your project:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information for your project:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines for your project:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions for your project:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GPLv3', 'Apache', 'BSD', 'None']
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    }
];


inquirer
    .prompt(questions)
    .then((answers) => {
        const readmeContent = generateREADME(answers);
        writeToFile("README.md", readmeContent);
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.error("Prompt couldn't be rendered in the current environment");
        } else {
            console.error("Something went wrong: ", error);
        }
    });

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error("Error writing to file: ", err);
            return;
        }
        console.log("README.md has been generated!");
    });
}
