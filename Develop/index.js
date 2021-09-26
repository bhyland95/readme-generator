const inquirer = require('inquirer');
const fs = require('fs');

const generatePage = require('./utils/generateMarkdown');

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      //TITLE OF PROJECT
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter your project title!');
          return false;
        }
      }
    },
    {
      //WRITE A DESCRIPTION
      type: 'input',
      name: 'description',
      message: 'Please enter a description for your project. (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please enter your project description!');
          return false;
        }
      }
    },
    {
      //INSTALLATION INSTRUCTIONS
      type: 'input',
      name: 'installation',
      message: 'If there are installation instructions for your project, describe them.',

    },
    {
      //USAGE INFORMATION
      type: 'input',
      name: 'usage',
      message: 'How does your project work? How do you use it?.',

    },
    {
      //CONTRIBUTION
      type: 'input',
      name: 'contributing',
      message: 'State if you are open to contributions and what your requirements are for accepting them.',
    },
    {
      //TEST
      type: 'input',
      name: 'tests',
      message: 'What are the instructions for running tests? (if necessary)',
    },
    {
      //CHOOSE A LICENSE
      type: 'list',
      name: 'license',
      message: 'Choose your license for your project.',
      choices: ['MIT','Apache','GNU']
    },
    {
      //GITHUB USERNAME
      type: 'input',
      name: 'username',
      message: 'What is your Github UserName? (Required)',
      validate: userName => {
        if (userName) {
          return true;
        } else {
          console.log('Please enter your Github Username!');
          return false;
        }
      }
    },
    {
      //EMAIL ADDRESS
      type: 'input',
      name: 'email',
      message: 'What is your email address? (Required)',
      validate: email => {
        if (email) {
          return true;
        } else {
          console.log('Please enter your email!');
          return false;
        }
      }
    },

  ])

};

// TODO: Create a function to write README file
// writing files
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

questions()
  .then(answers => {
    return generatePage(answers);
  })
  .then(markdownData => {
    return writeFile(markdownData);
  });
