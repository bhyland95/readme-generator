const inquirer = require('inquirer');
const fs = require('fs');

const generatePage = require('./utils/generateMarkdown');

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
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
        }
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

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
questions()
.then(answers => {
  return generatePage(answers);
})
.then(markdownData => {
  return writeFile(markdownData);
});
