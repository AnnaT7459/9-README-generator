// *add footer/caption that README for this project was made with the generator
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ title, description, installation, usage, license, contributions, tests, questions }) =>
`# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the terms of the ${answers.license} license.

## Contributions
${answers.contributions}

## Tests
${answers.tests}

## Questions
For any questions, please contact [${answers.questions}](mailto:${answers.questions}).

---

*This README was generated with a README generator.*`
 
// TODO: Create an array of questions for user input
// reference: https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
inquirer
    .prompt ([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What was your motivation to make this application?',
        //   *How do I add more questions to the description section? make into 1 describe your project
        // 'Why did you build this application?'
        // 'What problem does this application solve?'
        // 'What did you learn from creating this application?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
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
    //     message: 'List your collaborators, if any, with links to their GitHub profiles., If you used any    third-party assets that require attribution, list the creators with links to their primary web presence in this section., If you followed tutorials, include links to those as well.
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
        // If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/)
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
]);
//   .then((answers) => {
//     const READMEcontent = generateREADME(answers);

//     fs.writeFile('index.html', htmlPageContent, (err) =>
//       err ? console.log(err) : console.log('Successfully created index.html!')
//     );
//   });


// TODO: Create a function to write README file
// reference: https://nodejs.org/en/learn/manipulating-files/writing-files-with-nodejs
const fileName = README.md;


function writeToFile(fileName, generateREADME) {
    fs.writeToFile(fileName, generateREADME, err => {
        if (err) {
            console.error(err);
        } else {
            console.log(`Successfully created README.md!`);
        }
    });
}

writeToFile(fileName, generateREADME);

// function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();



// const generateREADME = ({ title, description, installation, usage, license, contributions test, questions }) =>
//   `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <header class="p-5 mb-4 header bg-light">
//     <div class="container">
//       <h1 class="display-4">Hi! My name is ${name}</h1>
//       <p class="lead">I am from ${location}.</p>
//       <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
//       <ul class="list-group">
//         <li class="list-group-item">My GitHub username is ${github}</li>
//         <li class="list-group-item">LinkedIn: ${linkedin}</li>
//       </ul>
//     </div>
//   </header>
// </body>
// </html>`;


//   .then((answers) => {
//     const htmlPageContent = generateHTML(answers);

//     fs.writeFile('index.html', htmlPageContent, (err) =>
//       err ? console.log(err) : console.log('Successfully created index.html!')
//     );
//   });
