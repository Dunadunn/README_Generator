const inquirer = require('inquirer');

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
    // Continue with other questions
];

inquirer.prompt(questions).then((answers) => {
    // Use answers to generate README
});

const fs = require('fs');

fs.writeFile('README.md', readmeContent, (err) => {
    if (err) throw err;
    console.log('README.md has been generated!');
});
