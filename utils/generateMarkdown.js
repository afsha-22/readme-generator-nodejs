// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function licenseBadge(license) {
  const licenseType = license[0]
  let licenseString = " "
  if (licenseType === "MIT") {
    licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  };
  if (licenseType === "GNU General Public License 2.0") {
    licenseString = `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
  };
  if (licenseType === "Apache License 2.0") {
     licenseString = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    };
  if (licenseType === "GNU General Public License 3.0") {
      licenseString = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    };
  return licenseString
  };

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseType = license[0]
  let licenseString = " "
  if (licenseType === "MIT") {
    licenseString = `https://opensource.org/licenses/MIT`
  };
  if (licenseType === "GNU General Public License 2.0") {
    licenseString = `https://opensource.org/licenses/GPL-2.0`
  };
  if (licenseType === "Apache License 2.0") {
     licenseString = `https://opensource.org/licenses/Apache-2.0`
    };
  if (licenseType === "GNU General Public License 3.0") {
      licenseString = `https://opensource.org/licenses/GPL-3.0`
    };
  return licenseString
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents:
  1. [Description](#description) 
  2. [Installation](#Installation)
  3. [Usage](#Usage)  
  4. [Contributing](#Contributing)
  5. [Tests](#Tests)
  6. [License](#License)
  7. [GitHub](#GitHub)
  8. [E-mail](#E-mail)

  ## Description
  Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  
  ## License
  ${data.license}
  ${licenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  
  ## How to Contribute
  ${data.contribute}
  
  ## Tests
  ${data.test}

  ## GitHub
  ${data.github}

  ## E-mail
  ${data.email}
  `;
}

module.exports = generateMarkdown;
