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
      name: 'Title',
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
      name: 'Description',
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
      name: 'test',
      message: 'What are the instructions for running tests? (if necessary)',
    },
    {
      //CHOOSE A LICENSE
      type: 'list',
      name: 'license',
      message: 'Choose your license for your project.',
      choices: ['afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0', 'bsd-2-clause', 'bsd-3-clause', 'bsd-3-clause-clear', 'cc', 'cc0-1.0', 'cc-by-4.0', 'cc-by-sa-4.0', 'wtfpl', 'ecl-2.0', 'epl-1.0', 'epl-2.0', 'eupl-1.1', 'agpl-3.0', 'gpl', 'gpl-2.0', 'gpl-3.0', 'lgpl', 'lgpl-2.1', 'lgpl-3.0', 'isc', 'lppl-1.3c', 'ms-pl', 'mit', 'mpl-2.0', 'osl-3.0', 'postgresql', 'ofl-1.1', 'ncsa', 'unlicense', 'zlib']
    },
    {
      //GITHUB USERNAME
      type: 'input',
      name: 'userName',
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
