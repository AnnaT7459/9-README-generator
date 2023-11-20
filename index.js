// *add footer/caption that README for this project was made with the generator
// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const generateREADME = ({ title, description, installation, usage, license, contributions, tests, questions }) => `# ${title}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
This project is licensed under the terms of the ${license} license.

## Contributions
${contributions}

## Tests
${tests}

## Questions
For any questions, please contact me at ${questions}

---

*This README was generated with a README generator.*`;
// TODO: Create a function to initialize app
function init() {
    // TODO: Create an array of questions for user input
    // reference: https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your application?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'Describe your application. (What was your motivation? Why did you build it? What problem does it solve? What did you learn from creating it?)',
            },
            {
                type: 'input',
                name: 'installation',
                message: 'What are the steps required to install your application? Provide a step-by-step description of how to get the development environment running.',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'What are the instructions for use? Provide examples.',
                //   Is there a way for users to upload screenshots? input path to file *future development*
            },
            // *FUTURE DEVELOPMENT TO GENERATE CREDITS IN APA FORMAT*
            // {
            //     type: 'input',
            //     name: 'credits',
            //     message: 'List your collaborators, if any, with links to their GitHub profiles., If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section., If you followed tutorials, include links to those as well.
            // },
            {
                type: 'input',
                name: 'license',
                message: 'Choose a license.',
                // create a drop down menu with list of options [https://choosealicense.com/](https://choosealicense.com/)
                // add badge to corresponding license to the top of the README 
                // include a notice to section that explains which license the application is covered under
            },
            {
                type: 'input',
                name: 'contributions',
                message: 'Enter guidelines for developers to contribute to your application.',
                // If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The Contributor Covenant (https://www.contributor-covenant.org/) is an industry standard.
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Write a test for your application and include examples on how to run them.',
            },
            {
                type: 'input',
                name: 'questions',
                message: 'Enter your email address and GitHub username link for developers to contact you with additional questions.',
            },
        ])
        // student mini project reference code
        //     fs.writeFile('index.html', htmlPageContent, (err) =>
        //       err ? console.log(err) : console.log('Successfully created index.html!')
        //     );
        //   });


        // TODO: Create a function to write README file
        // reference: https://nodejs.org/en/learn/manipulating-files/writing-files-with-nodejs
        .then((answers) => {
            const READMEcontent = generateREADME(answers);

            fs.writeFile('README.md', READMEcontent, (err) =>
                err ? console.log(err) : console.log('Successfully created README.md!')
            );
        });
}
// Function call to initialize app
init();