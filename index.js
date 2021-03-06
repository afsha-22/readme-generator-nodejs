// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the Title of the project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the description of the project?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How to Install the project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How to Use the application?',
      },
      {
        type: "checkbox",
        message: "What License to use for the repository?",
        choices: ["MIT", "GNU General Public License 2.0", "Apache License 2.0", "GNU General Public License 3.0"],
        name: "license",
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'How can people Contribute to the project?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'How do people update the Tests for the project?',
      },
      {
          type: "input",
          message: "What is your GitHub username?",
          name: "github"
      },
      {
          type: "input",
          message: "What is your email address where users and contributors can send questions?",
          name: "email"
      },
    ]);
  };

// TODO: Create a function to write README file
function write(data) {
   writeFileAsync('./generatedREADME/README.md', generateMarkdown(data))
}

// TODO: Create a function to initialize app
const init = () => {
    questions()
      .then((data) => write(data))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();
