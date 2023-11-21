// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// reference: H. Burke - personal communication 11.19.23, https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
function renderLicenseBadge(license) {
  if (!license) {
    console.log('No license chosen');
    return '';
}
  const licenseBadge = {
    'Apache License 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    'GNU General Public License': 'https://img.shields.io/badge/License-GPL-blue.svg',
    'MIT License': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'BSD 2-Clause "Simplified" License': 'https://img.shields.io/badge/License-BSD%202--Clause-orange.svg',
    'BSD 3-Clause "New" or "Revised" License': 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg',
    'Boost Software License 1.0': 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg',
    'Creative Commons Zero v1.0 Universal': 'https://img.shields.io/badge/License-CC0%201.0-green.svg',
    'Eclipse Public License 2.0': 'https://img.shields.io/badge/License-EPL%202.0-red.svg',
    'GNU Affero General Public License v3.0': 'https://img.shields.io/badge/License-AGPL%20v3-blue.svg',
    'GNU General Public License v2.0': 'https://img.shields.io/badge/License-GPL%20v2-blue.svg',
    'Mozilla Public License 2.0': 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg',
    'The Unlicense': 'https://img.shields.io/badge/license-Unlicense-blue.svg',
  };

  return licenseBadge [license] || '';
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// referene: H. Burke - personal communication 11.19.23, https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
function renderLicenseLink(license) {
  if (!license) {
    console.log('No license chosen');
    return '';
}

  const licenseLink = {
  'Apache License 2.0': 'https://opensource.org/licenses/Apache-2.0',
  'GNU General Public License': 'https://opensource.org/licenses/GPL-3.0',
  'MIT License': 'https://opensource.org/licenses/MIT',
  'BSD 2-Clause "Simplified" License': 'https://opensource.org/licenses/BSD-2-Clause',
  'BSD 3-Clause "New" or "Revised" License': 'https://opensource.org/licenses/BSD-3-Clause',
  'Boost Software License 1.0': 'https://opensource.org/licenses/BSL-1.0',
  'Creative Commons Zero v1.0 Universal': 'https://creativecommons.org/publicdomain/zero/1.0/',
  'Eclipse Public License 2.0': 'https://opensource.org/licenses/EPL-2.0',
  'GNU Affero General Public License v3.0': 'https://opensource.org/licenses/AGPL-3.0',
  'GNU General Public License v2.0': 'https://opensource.org/licenses/GPL-2.0',
  'Mozilla Public License 2.0': 'https://opensource.org/licenses/MPL-2.0',
  'The Unlicense': 'http://unlicense.org/',
  };

  return licenseLink [license] || '';
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
}

const licenseBadge = renderLicenseBadge(license);
const licenseLink = renderLicenseLink(license);

return `
## License

This application is licensed under the terms of the ![${license}](${licenseBadge}) license.
[License Terms](${licenseLink})
`;
}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(answers) {
//   return `# ${answers.title}
// ${renderLicenseSection(answers.license)}`;
// }

module.exports = renderLicenseSection;
