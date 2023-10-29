const inquirer = require('inquirer');
const jest = require('jest');

const fs = require('fs');

const generateLogo = require('.')

console.log("Please answer the following quetsions to generate your logo!")

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Please enter in 3 letters of text for the Logo Name.'



  },
  {
    type: 'checkbox',
    name: 'colorLogo',
    message: 'Please choose a color for the Logo Text'

  },
  {
    type: 'checkbox',
    name: 'shape',
    message: 'Please choose a shape for the Logo.'

  },
  {
    type: 'checkbox',
    name: 'colorShape',
    message: 'Please choose a color for the shape of the Logo.'
  }

]