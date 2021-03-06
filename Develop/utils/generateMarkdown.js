function generateMarkdown(data) {
  return `
  # ${data.title}
 
  ## Description
  ${data.description}

  ![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
 ${data.installation}

  ## Usage
  ${data.usage}
 
  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## License
  This application is covered by the ${data.license} license. 
  <br />
  For more information about licenses, visit [this link.](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)

  ## Questions
  If you have any questions, please reach out! 
  <br />
  Find me on GitHub: [${data.username}](https://github.com/${data.username})<br />
  <br />
  Email me: ${data.email}

`;}


module.exports = generateMarkdown;
