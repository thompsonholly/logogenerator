const inquirer = require('inquirer');
const jest = require('jest');

const fs = require('fs');
const { writeFile } = require('fs')
const { Triangle, Circle, Square } = require("./lib/shapes")

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
    type: 'input',
    name: 'textColor',
    message: 'Please enter in a color for the text.',
    validate: textColor => {
      if (userTextColor) {
        return true;
      } else {
        console.log('Enter a color keyword!')
      }
      return false;
    }
  },
  {
    type: 'list',
    name: 'shape',
    choices: ['Triangle', 'Square', 'Circle'],
    message: 'Please choose a shape for the Logo.',
    validate: userShape => {
      if (userShape) {
        return true;
      } else {
        console.log('Please choose a shape for your Logo!')
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Please choose a color for the shape of the Logo.',
    validate: shapeColor => {
      if (userColorShape) {
        return true;
      } else {
        console.log('Please enter a valid color for the shape of your Logo!')
        return false;
      }
    }
  }
]
// render logo shape and text
class SVG {
  const() {
    this.textElement = ''
    this.shapeElement = ''
  }
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
  }
  setTextElement(text, textColor) {
    this.textElement = `<text x="150" y="125" text-anchor="middle" fill="${textColor}">${text} </text>`
  }
  setShapeElement(shape) {
    this.shapeElement = shape.render()
  }
}

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
    console.log('Here is', data);

    const logoInput = render(data);
    // Create a function to write logo.svg
    writeToFile(logoInput);
  })
}
// Function call to initialize app
init();