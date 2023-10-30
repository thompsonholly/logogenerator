const inquirer = require('inquirer');
const jest = require('jest');

const fs = require('fs');
const { writeFile } = require('fs')

// const generateLogo = require('./lib/shapes')

console.log("Please answer the following quetsions to generate your logo!");

// Create questions to prompt user to create Logo
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Please enter in 3 characters of text for the Logo Name.',
    // how to create text length?
    validate: userText => {
      if (userText.length < 1 || userText.length > 3) {
        false
        console.log('Please enter 3 characters for Logo.!')
      }
      else {
        return true
      }

    }
  },
  {
    type: 'checkbox',
    name: 'shape',
    choices: ['Triangle', 'Square', 'Circle'],
    message: 'Please choose a shape for the Logo.',
    validate: userShape => {
      if (userShape) {
        return true;
      } else {
        console.log('Please choose a shape for your Logo!');
        return false;
      }
    }

  },
  {
    type: 'checkbox',
    name: 'colorShape',
    choices: ['Red', 'Green', 'Blue', 'Orange'],
    message: 'Please choose a color for the shape of the Logo.',
    validate: userColorShape => {
      if (userColorShape) {
        return true;
      } else {
        console.log('Please choose a color for the shape of your Logo!');
        return false;
      }
    }
  }

]

function writeToFile(blueberry) {
  fs.writeFile('./output/logo.svg', blueberry, (err) => {
    if (err) {
      console.log('Error');
    }
    console.log('You created a LOGO!')
  })
}

function init() {
  inquirer.prompt(questions).then((data) => {
    // check what data looks like before write to file
    console.log('Data is', data);

    const logoInput = generateLogo(data);
    // Create a function to write logo.svg
    writeToFile(logoInput);
  })
}
// Function call to initialize app
init();