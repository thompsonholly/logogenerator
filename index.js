const inquirer = require('inquirer');
const jest = require('jest');

const fs = require('fs');
const { writeFile } = require('fs')

const generateLogo = require('./lib/shapes')

console.log("Please answer the following quetsions to generate your logo!");

// Create questions to prompt user to create Logo
const questions = [
  {
    type: 'input',
    name: 'text',
    choices: "3", // how to create text length?
    message: 'Please enter in 3 letters of text for the Logo Name.',
    validate: userText => {
      if (userText < text.length || userText > text.length) {
        return false;
      } else {
        (userText = text.length)
        return true;
      }
    }
  },
  {
    type: 'checkbox',
    name: 'textColor',
    choices: ['red, green, blue, black, yellow, orange'],
    message: 'Please choose a color for the text of your Logo.',
    validate: userTextColor => {
      if (userTextColor) {
        return true;
      } else {
        console.log('Please choose a color for the text of your Logo!');
        return false;
      }
    }


  },
  {
    type: 'checkbox',
    name: 'colorLogo',
    choices: ['red, green, blue, black, yellow, orange'],
    message: 'Please choose a color for the Logo Text.',
    validate: userColorLogo => {
      if (userColorLogo) {
        return true;
      } else {
        console.log('Please choose a color for your Logo!');
        return false;
      }
    }
  },
  {
    type: 'checkbox',
    name: 'shape',
    choices: ['triangle, square, circle'],
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
    choices: ['red, green, blue, black, yellow, orange'],
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