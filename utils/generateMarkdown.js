// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseLink = renderLicenseLink(license);
  switch(license) {
    case 'MIT':
      return `[![License badge](https://img.shields.io/badge/license-MIT-green)](${licenseLink})`;
    case 'APACHE2.0':
      return `[![License badge](https://img.shields.io/badge/license-APACHE2.0-green)](${licenseLink})`;
    case 'GPL-3.O':
      return `[![License badge](https://img.shields.io/badge/license-GPL--3.0-green)](${licenseLink})`;
    case 'BSD-3-CLAUSE':
      return `[![License badge](https://img.shields.io/badge/license-BSD--3--CLAUSE-green)](${licenseLink})`;
    default:
      return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT':
      return `https://opensource.org/license/mit/`;
    case 'APACHE2.0':
      return `https://opensource.org/license/apache-2-0/`;
    case 'GPL-3.O':
      return `https://opensource.org/license/gpl-3-0/`;
    case 'BSD-3-CLAUSE':
      return `https://opensource.org/license/bsd-3-clause/`;
    default:
      return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseLink = renderLicenseLink(license);
  switch(license){
    case 'MIT':
    case 'APACHE2.0':
    case 'GPL-3.0':
    case 'BSD-3-CLAUSE':
      return `## License
This project is licensed under [${license}](${licenseLink}).
      `;
    default:
      return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log('generating markdown');
  
  //generate license badge
  const licenseBadge = renderLicenseBadge(data.license);
  //generate license section
  const licenseSection = renderLicenseSection(data.license);
  //generate link
  const licenseLink = renderLicenseLink(data.license);
  // readme template
  return `
# ${data.title}
#### by ${data.fullname} ${licenseBadge}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
Name: ${data.fullname}
E-mail: ${data.email}
Github: ${data.github}
Colaborators: ${data.colab}

${licenseSection}
`;
}

module.exports = generateMarkdown;