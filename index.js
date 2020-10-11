// Requires
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generatePage = require('./src/page-template.js');

// Array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give project description:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please give installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please give usage information:'
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'Please give contribution guidelines:'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please give test instructions:'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please choose a license for your project:',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'none']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:'
    },
];

fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Profile complete! Check out index.html to see the output!');
});