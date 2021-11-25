

function generateMarkdown (data){
    return `
# ${data.title}
https://github.com/${data.github}
# Description
${data.description}
# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
# Installation
The following nescessary dependencies must be installed to run the application
# Usage
In order to use this app, ${data.usage}
# License
This project is licensed under the ${data.license} license. 
![Github license](https://img.shields.io/badge/License-IPL_1.0-blue.svg)
# Contributing
Contributor: ${data.contributors}
# Tests
The following is needed to run the test: ${data.tests}
# Questions
If you have any Questions about the report,open an issue or contact ${data.usage}
`

}

module.exports = generateMarkdown;
